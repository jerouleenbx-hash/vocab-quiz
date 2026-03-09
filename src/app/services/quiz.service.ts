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


  getNextQuestionFindDefinition(level: string | null = null): Observable<MultipleChoiceWord> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map((allWords: MultipleChoiceWord[]) => {
      // 1. Filtre par difficulté si un niveau est spécifié
      const filteredWords = level ? allWords.filter(w => w.difficulty === level) : allWords;

      console.log(filteredWords);
      // 2. Si aucun mot ne correspond, vous pouvez gérer ce cas ici (par exemple, retourner un mot par défaut ou un message)
      if (filteredWords.length === 0) {
        throw new Error("Aucun mot ne correspond à la difficulté choisie.");
      }

      // 3. Sélectionne un objet aléatoire parmi les mots filtrés
      const randomIndex = Math.floor(Math.random() * filteredWords.length);
      const selectedWord = filteredWords[randomIndex];

      // 4. Filtre les objets du même type (sauf l'objet sélectionné)
      const sameTypeWords = filteredWords.filter(
        (w) => w.type === selectedWord.type && w.id !== selectedWord.id
      );

      console.log(sameTypeWords);

      // 5. Sélectionne 3 autres définitions aléatoires du même type
      const shuffledSameType = sameTypeWords.sort(() => 0.5 - Math.random());
      const wrongChoices = shuffledSameType.slice(0, 3).map((w) => w.definition);

      // 6. Construit le tableau de choix (correct + 3 incorrects)
      const allChoices = [...wrongChoices, selectedWord.definition];
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

getNextQuestionFindWord(level: string | null = null): Observable<MultipleChoiceWord> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map((allWords: MultipleChoiceWord[]) => {

      console.log('Difficulty : ' + level);
      // 1. Filtre par difficulté si un niveau est spécifié
      const filteredWords = level ? allWords.filter(w => w.difficulty === level) : allWords;

      // 2. Si aucun mot ne correspond, gérer ce cas
      if (filteredWords.length === 0) {
        throw new Error("Aucun mot ne correspond à la difficulté choisie.");
      }

      // 3. Sélectionne un objet aléatoire parmi les mots filtrés
      const randomIndex = Math.floor(Math.random() * filteredWords.length);
      const selectedWord = filteredWords[randomIndex];

      // 4. Filtre les objets du même type (sauf l'objet sélectionné)
      const sameTypeWords = filteredWords.filter(
        (w) => w.type === selectedWord.type && w.id !== selectedWord.id
      );

      console.log(sameTypeWords);

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