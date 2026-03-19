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

  getQuizDefinition(level: string, tag: string, userId: number): Observable<MultipleChoiceWord[]> {
    let params = new HttpParams()
      .set('level', level)
      .set('tag', tag)
      .set('userId', userId.toString());

    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/quiz/definition`, { params });
  }

  getQuizWord(level: string, tag: string, userId: number): Observable<MultipleChoiceWord[]> {
    let params = new HttpParams()
      .set('level', level)
      .set('tag', tag)
      .set('userId', userId.toString());

    return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/quiz/word`, { params });
  }

  sendAnswer(wordId: number, correct: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/answer`, { wordId: wordId, grade: correct});
  }  

}
