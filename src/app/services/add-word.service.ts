import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewWord {
  value: string;
  definition: string;
  example: string;
  difficulty?: number;
}

@Injectable({ providedIn: 'root' })
export class WordService {
  private baseUrl = 'https://127.0.0.1:8000/api/words'; // route Symfony

  constructor(private http: HttpClient) {}

  addWord(word: NewWord): Observable<any> {
    return this.http.post(this.baseUrl, word);
  }
}