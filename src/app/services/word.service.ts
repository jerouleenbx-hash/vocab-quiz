import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SimpleWord } from '../models/interfaces';

export interface WordProgress {
  id: number;
  userid: number;
  word: string;
  date: string;
  correct: number;
}

@Injectable({ providedIn: 'root' })
export class WordService {
  private readonly jsonUrl = '/words.json';

  constructor(private http: HttpClient) {}

  getWordsByTag(targetTag: string): Observable<SimpleWord[]> {
    return this.http.get<SimpleWord[]>(this.jsonUrl).pipe(
      map(words => words.filter(word => word.tags === targetTag))
    );
  }

  getAllWords(tag: string): Observable<SimpleWord[]> {
    return this.http.get<SimpleWord[]>(this.jsonUrl).pipe(
      map(words => words.filter(word => word.tags === tag))
    );
  }

  getAllTags(): Observable<string[]> {
    return this.http.get<SimpleWord[]>(this.jsonUrl).pipe(
      map(words => {
        const tags = words
          .map(w => w.tags)
          .filter((tag): tag is string => !!tag && tag.trim().length > 0)
          .flatMap(tag => tag.split(','))
          .map(tag => tag.trim());

        return Array.from(new Set(tags));
      })
    );
  }

  getAllTypes(): Observable<string[]> {
    return this.http.get<SimpleWord[]>(this.jsonUrl).pipe(
      map(words =>
        Array.from(
          new Set(
            words
              .map(word => word.type)
              .filter((type): type is string => !!type && type.trim().length > 0)
              .map(type => type.trim())
          )
        )
      )
    );
  }
}
