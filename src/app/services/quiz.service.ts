import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

export interface MultipleChoiceWord {
  id: number;
  word: string;
  definition: string; // la vraie réponse fournie par le back
  difficulty: string;
  type: string;
  tags?: string;
  example?: string;
  choices: string[];
}

export interface WordProgress {
  id: number;
  userid: number;
  word: string;
  date: string;
  correct: number;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private apiUrl = 'https://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

getNextQuestionFindDefinition(level: string, tag: string | null): Observable<MultipleChoiceWord> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map((allWords: MultipleChoiceWord[]) => {
      

      // 1. Filtrer par difficulté si un niveau est spécifié
      const filteredWords = level !== "All" ? allWords.filter(w => w.difficulty === level) : allWords;

      if (filteredWords.length === 0) {
        throw new Error("Aucun mot ne correspond à la difficulté choisie.");
      }

      // 2. Sélectionner uniquement les mots qui contiennent le tag passé en paramètre

      const taggedWords = tag ? filteredWords.filter(w => w.tags?.includes(tag)) : filteredWords;
      if (taggedWords.length === 0) {
        throw new Error("Aucun mot avec le tag " + tag + " disponible.");
      }

      // 3. Sélectionner un mot aléatoire parmi les mots taggés
      const randomIndex = Math.floor(Math.random() * taggedWords.length);
      const selectedWord = taggedWords[randomIndex];

      // 4. Pour les mauvaises réponses, on prend des mots du même type mais **sans filtrer sur le tag**
      const sameTypeWords = filteredWords.filter(
        (w) => w.type === selectedWord.type && w.id !== selectedWord.id
      );

      const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());
      const wrongChoices = shuffledSameType.slice(0, 3).map((w) => w.definition);

      // 5. Construire le tableau de choix (correct + 3 incorrects)
      const allChoices = [...wrongChoices, selectedWord.definition];
      const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

      // 6. Retourner l'objet MultipleChoiceWord
      return {
        id: selectedWord.id,
        word: selectedWord.word,
        choices: shuffledChoices,
        definition: selectedWord.definition,
        example: selectedWord.example,
        type: selectedWord.type,
        tags: selectedWord.tags,
        difficulty: selectedWord.difficulty
      };
    })
  );
}

getNextQuestionFindWord(level: string, tag: string): Observable<MultipleChoiceWord> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map((allWords: MultipleChoiceWord[]) => {

      console.log('Difficulty : ' + level);
      // 1. Filtre par difficulté si un niveau est spécifié
      const filteredWords = level !== "All" ? allWords.filter(w => w.difficulty === level) : allWords;

      // 2. Si aucun mot ne correspond, gérer ce cas
      if (filteredWords.length === 0) {
        throw new Error("Aucun mot ne correspond à la difficulté choisie.");
      }

      // 2. Sélectionner uniquement les mots qui contiennent le tag 'OfficeS9E18'
      const taggedWords = tag ? filteredWords.filter(w => w.tags?.includes(tag)) : filteredWords;
      if (taggedWords.length === 0) {
        throw new Error("Aucun mot avec le tag 'OfficeS9E18' disponible.");
      }
      
      // 3. Sélectionne un objet aléatoire parmi les mots filtrés
      const randomIndex = Math.floor(Math.random() * taggedWords.length);
      const selectedWord = taggedWords[randomIndex];

      // 4. Filtre les objets du même type (sauf l'objet sélectionné)
      const sameTypeWords = taggedWords.filter(
        (w) => w.type === selectedWord.type && w.id !== selectedWord.id
      );

      // 5. Sélectionne 3 autres mots aléatoires du même type
      const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());
      const wrongChoices = shuffledSameType.slice(0, 3).map((w) => w.word);

      // 6. Construit le tableau de choix (correct + 3 incorrects)
      const allChoices = [...wrongChoices, selectedWord.word];
      const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

      // 7. Retourne l'objet MultipleChoiceWord
      return {
        id: selectedWord.id,
        word: selectedWord.word,
        choices: shuffledChoices,
        definition: selectedWord.definition,
        example: selectedWord.example,
        type: selectedWord.type,
        difficulty: selectedWord.difficulty
      };
    })
  );
}


  sendAnswer(wordId: number, correct: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/answer`, { wordId: wordId, grade: correct});
  }  

   getFilteredWords(level: string, tag: string, userId: number): Observable<MultipleChoiceWord[]> {
    let params = new HttpParams()
      .set('level', level)
      .set('tag', tag)
      .set('userId', userId.toString());

    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/quiz/fsrs`, { params });
  }

    /**
   * Récupère 10 mots en fonction de leur niveau de maîtrise (correct).
   * @param level Niveau de difficulté (ex: 'A1', 'B2', etc.)
   * @param tag Tag optionnel pour filtrer les mots
   * @param userId ID de l'utilisateur pour récupérer ses progrès
   * @returns Observable<MultipleChoiceWord[]>
   */
  getNextQuestionDefinitionsByProgress(
  level: string,
  tag: string | null,
  userId: number
): Observable<MultipleChoiceWord[]> {
  return forkJoin({
    words: this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`),
    progress: this.http.get<WordProgress[]>(`${this.apiUrl}/words/progress?user_id=${userId}`),
  }).pipe(
    map(({ words, progress }) => {
      // 1. Filtrer les mots par niveau et tag
      let filteredWords: MultipleChoiceWord[] = words;
      if (level !== 'All') {
        filteredWords = filteredWords.filter((w: MultipleChoiceWord) => w.difficulty === level);
      }
      if (tag) {
        filteredWords = filteredWords.filter((w: MultipleChoiceWord) => w.tags?.includes(tag));
      }
      if (filteredWords.length === 0) {
        throw new Error('Aucun mot ne correspond aux critères.');
      }

      // 2. Associer chaque mot à son historique de réponses correctes
      const wordsWithProgress = filteredWords.map((word: MultipleChoiceWord) => {
        const wordProgress = progress.filter((p: WordProgress) => p.word === word.word);
        // Calculer le taux de réussite
        const correctRate =
          wordProgress.length > 0
            ? wordProgress.filter((p: WordProgress) => p.correct).length / wordProgress.length
            : 0;
        return { ...word, correctRate };
      });

      // 3. Trier par taux de réussite croissant
      wordsWithProgress.sort((a: { correctRate: number }, b: { correctRate: number }) => a.correctRate - b.correctRate);

      // 4. Sélectionner les 10 premiers mots
      const selectedWords = wordsWithProgress.slice(0, 10);

      // 5. Pour chaque mot, générer les choix aléatoires (uniques)
      return selectedWords.map((selectedWord: MultipleChoiceWord & { correctRate: number }) => {
        // 5.1. Filtrer les mots du même type, mais différents du mot sélectionné
        const sameTypeWords = filteredWords.filter(
          (w: MultipleChoiceWord) => w.type === selectedWord.type && w.id !== selectedWord.id
        );

        // 5.2. Mélanger les mots du même type
        const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());

        // 5.3. Sélectionner 3 définitions uniques et différentes de la bonne réponse
        let wrongChoices: string[] = [];
        const maxAttempts = 20; // Pour éviter une boucle infinie
        let attempts = 0;

        while (wrongChoices.length < 3 && attempts < maxAttempts) {
          const candidate = shuffledSameType[attempts % shuffledSameType.length];
          const candidateDefinition = candidate.definition;
          if (
            candidateDefinition !== selectedWord.definition &&
            !wrongChoices.includes(candidateDefinition)
          ) {
            wrongChoices.push(candidateDefinition);
          }
          attempts++;
        }

        // 5.4. Si on n'a pas assez de choix uniques, compléter avec des valeurs par défaut
        if (wrongChoices.length < 3) {
          console.warn("Pas assez de choix uniques disponibles, certains choix peuvent être répétés.");
          while (wrongChoices.length < 3) {
            wrongChoices.push("---"); // Valeur par défaut
          }
        }

        // 5.5. Construire le tableau de choix (correct + 3 incorrects)
        const allChoices = [...wrongChoices, selectedWord.definition];
        const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

        // 5.6. Retourner l'objet MultipleChoiceWord
        const { correctRate, ...wordToReturn } = selectedWord;
        return {
          ...wordToReturn,
          choices: shuffledChoices,
        };
      });
    })
  );
}
}
