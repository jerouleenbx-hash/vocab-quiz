import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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


  sendAnswer(wordId: number, correct: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/answer`, { word_id: wordId, correct });
  }  
}