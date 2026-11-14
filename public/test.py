import json
import re
import unicodedata
from pypdf import PdfReader

# Titres complets des unités (Destination C1 & C2) utilisés pour les phrasal verbs,
# idioms et expressions qui ne figurent pas dans les listes thématiques du PDF.
UNIT_FALLBACK = {
    "Unit 02": "Thinking and learning",
    "Unit 04": "Change and technology",
    "Unit 06": "Time and work",
    "Unit 08": "Movement and transport",
    "Unit 10": "Communication and the media",
    "Unit 12": "Chance and nature",
    "Unit 14": "Quantity and money",
    "Unit 16": "Materials and the built environment",
    "Unit 18": "Reactions and health",
    "Unit 20": "Power and social issues",
    "Unit 22": "Quality and the arts",
    "Unit 24": "Relationships and people",
    "Unit 26": "Preference and leisure activities",
}

# Les 26 chapitres présents dans vocab.pdf associés à leur unité
CHAPTERS_ORDER = [
    ("Unit 02", "Thinking"),
    ("Unit 02", "Learning"),
    ("Unit 04", "Change"),
    ("Unit 04", "Technology"),
    ("Unit 06", "Time"),
    ("Unit 06", "Work"),
    ("Unit 08", "Movement"),
    ("Unit 08", "Transport"),
    ("Unit 10", "Communication"),
    ("Unit 10", "The media"),
    ("Unit 12", "Chance"),
    ("Unit 12", "Nature"),
    ("Unit 14", "Quantity"),
    ("Unit 14", "Money"),
    ("Unit 16", "Materials"),
    ("Unit 16", "The built environment"),
    ("Unit 18", "Reactions"),
    ("Unit 18", "Health"),
    ("Unit 20", "Power"),
    ("Unit 20", "Social issues"),
    ("Unit 22", "Quality"),
    ("Unit 22", "The arts"),
    ("Unit 24", "Relationships"),
    ("Unit 24", "People"),
    ("Unit 26", "Preference"),
    ("Unit 26", "Leisure activities"),
]

# Corrections des anomalies de reconnaissance optique (OCR) entre le PDF et le JSON
OCR_WORD_FIXES = {
    "na·ive": "naive",
    "scepticaljskeptical": "sceptical",
    "(games) console": "games console",
    "prevent(at)ive medicine": "preventive medicine",
    "overdratı": "overdraft",
}


def normalize(text: str) -> str:
    text = text.lower().strip()
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.replace("·", "")
    text = re.sub(r"\s+", " ", text)
    return text


def parse_pdf_chapters(pdf_path: str) -> dict:
    reader = PdfReader(pdf_path)
    full_text = "\n".join(page.extract_text() or "" for page in reader.pages)

    # Normalisation de deux en-têtes altérés par l'OCR dans le PDF
    full_text = full_text.replace("Socia! issues", "Social issues")
    full_text = re.sub(
        r"[^\n]*\ncivil service \(n phr\)",
        "\nWork\ncivil service (n phr)",
        full_text,
    )

    chapter_names = [ch for _, ch in CHAPTERS_ORDER]
    pattern = r"(?m)^(" + "|".join(re.escape(c) for c in chapter_names) + r")\s*$"
    parts = re.split(pattern, full_text)

    chapter_to_unit = {ch: unit for unit, ch in CHAPTERS_ORDER}
    word_map = {}

    for i in range(1, len(parts), 2):
        chapter = parts[i].strip()
        unit = chapter_to_unit[chapter]
        block = parts[i + 1]

        entries = re.findall(
            r"(?m)^([a-zA-Z0-9\s\-\'\(\)\/·]+?)\s+\((?:v|n|adj|adv|n phr|n pi|n pl)\)",
            block,
        )
        for raw_word in entries:
            w = raw_word.strip().lower()
            w = OCR_WORD_FIXES.get(w, w)
            word_map[(unit, normalize(w))] = chapter
            if "/" in w:
                word_map[(unit, normalize(w.split("/")[0]))] = chapter

    return word_map


def transform_words(input_json: str, pdf_path: str, output_json: str):
    word_map = parse_pdf_chapters(pdf_path)

    with open(input_json, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_data = []
    matched_pdf = 0
    fallback_used = 0

    for item in data:
        unit = item.get("tags", "")
        raw_word = item.get("word", "")
        norm_word = normalize(OCR_WORD_FIXES.get(raw_word.lower(), raw_word))

        chapter = word_map.get((unit, norm_word))
        if not chapter and item.get("category") == "Learning":
            chapter = "Learning"

        if chapter:
            matched_pdf += 1
        else:
            chapter = UNIT_FALLBACK.get(unit, item.get("category", "Unknown"))
            fallback_used += 1

        new_item = {
            "id": item["id"],
            "word": item["word"],
            "definition": item["definition"],
            "chapter": chapter,
            "type": item["type"],
            "tags": item["tags"],
            "example_sentence": item["example_sentence"],
        }
        new_data.append(new_item)

    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2)

    print(f"Terminé ! {len(new_data)} entrées traitées :")
    print(f" - {matched_pdf} mots associés directement à un chapitre du PDF")
    print(f" - {fallback_used} expressions/phrasal verbs associés au titre de l'unité")


if __name__ == "__main__":
    transform_words("words.json", "vocab.pdf", "words_updated.json")
