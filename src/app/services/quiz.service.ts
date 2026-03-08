import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface MultipleChoiceWord {
  id: number;
  word: string;
  definition: string; // la vraie réponse fournie par le back
  difficulty: string;
  type: string;
  example?: string;
  choices: string[];
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private apiUrl = 'https://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}


  getNextQuestionFindDefinition(): Observable<MultipleChoiceWord> {
    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
      map((allWords: MultipleChoiceWord[]) => {
        // 1. Sélectionne un objet aléatoire
        const randomIndex = Math.floor(Math.random() * allWords.length);
        const selectedWord = allWords[randomIndex];

        // 2. Filtre les objets du même type (sauf l'objet sélectionné)
        const sameTypeWords = allWords.filter(
          (w) => w.type === selectedWord.type && w.id !== selectedWord.id
        );

        console.log(sameTypeWords);

        // 3. Sélectionne 3 autres définitions aléatoires du même type
        const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());
        const wrongChoices = shuffledSameType.slice(0, 3).map((w) => w.definition);

        // 4. Construit le tableau de choix (correct + 3 incorrects)
        const allChoices = [...wrongChoices, selectedWord.definition];
        const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

        // 5. Retourne l'objet MultipleChoiceWord
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


  getNextQuestionFindWord(): Observable<MultipleChoiceWord> {
    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
      map((allWords: MultipleChoiceWord[]) => {
        // 1. Sélectionne un objet aléatoire
        const randomIndex = Math.floor(Math.random() * allWords.length);
        const selectedWord = allWords[randomIndex];

        // 2. Filtre les objets du même type (sauf l'objet sélectionné)
        const sameTypeWords = allWords.filter(
          (w) => w.type === selectedWord.type && w.id !== selectedWord.id
        );

        console.log(sameTypeWords);

        // 3. Sélectionne 3 autres définitions aléatoires du même type
        const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());
        const wrongChoices = shuffledSameType.slice(0, 3).map((w) => w.word);

        // 4. Construit le tableau de choix (correct + 3 incorrects)
        const allChoices = [...wrongChoices, selectedWord.word];
        const shuffledChoices = allChoices.sort(() => 0.5 - Math.random());

        // 5. Retourne l'objet MultipleChoiceWord
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