import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


export interface SimpleWord {
  id: number;
  word: string;
  definition: string;
  difficulty: string;
  type: string;
  tags?: string;
  example?: string;
}

export interface MultipleChoiceWord extends SimpleWord {
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
export class WordService {

  private apiUrl = 'https://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  listWords(level: string, tag: string): Observable<MultipleChoiceWord[]> {
console.log(level);
console.log(tag);
    const difficultyOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
      map((allWords: MultipleChoiceWord[]) =>
        allWords
          .filter(w => w.tags?.includes(tag))
          .filter(w => w.difficulty === level || level ==='All')
          .sort((a, b) =>
            difficultyOrder.indexOf(a.difficulty) -
            difficultyOrder.indexOf(b.difficulty)
          )
      )
    );
  }


getAllWords(level: string, tag: string): Observable<SimpleWord[]> {
  return this.http.get<SimpleWord[]>(`${this.apiUrl}/words`, {
    params: {
      tag: tag,
      level: level
    }
  });
}


listProgress(level: string, tag: string): Observable<WordProgress[]> {
console.log(level);
console.log(tag);
    const difficultyOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    return this.http.get<WordProgress[]>(`${this.apiUrl}/words/progress`).pipe(
      map((allWords: WordProgress[]) =>
        allWords
          )
      );
  }

getAllTags(): Observable<string[]> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map(words => {
      // Extraire tous les tags non vides
      const tags = words
        .map(w => w.tags)                   // récupérer tags
        .filter(tag => tag && tag.trim())   // ignorer null, undefined ou chaîne vide
        .flatMap(tag => tag ? tag.split(',') : [])        
        .map(tag => tag.trim());            // enlever les espaces superflus

      // Supprimer les doublons
      return Array.from(new Set(tags));
    })
  );
}

}