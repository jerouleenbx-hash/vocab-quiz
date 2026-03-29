import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SimpleWord, MultipleChoiceWord } from '../models/interfaces'


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

getAllWords(level: string, tag: string): Observable<SimpleWord[]> {
  return this.http.get<SimpleWord[]>(`${this.apiUrl}/words`, {
    params: {
      tag: tag,
      level: level
    }
  });
}

getAllTags(category?: string): Observable<string[]> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map(words => {
      // Filtrer par catégorie si spécifiée
      const filteredWords = category
        ? words.filter(w => w.category === category)
        : words;

      // Extraire tous les tags non vides
      const tags = filteredWords
        .map(w => w.tags)
        .filter(tag => tag && tag.trim())
        .flatMap(tag => tag ? tag.split(',') : [])
        .map(tag => tag.trim());

      // Supprimer les doublons
      return Array.from(new Set(tags));
    })
  );
}


getAllCategories(): Observable<string[]> {
  return this.http.get<MultipleChoiceWord[]>(`${this.apiUrl}/words`).pipe(
    map(words => {
      // Extraire tous les categories non vides
      const categories = words
        .map(w => w.category)                   // récupérer tags
        .filter(category => category && category.trim())   // ignorer null, undefined ou chaîne vide
        .flatMap(category => category ? category.split(',') : [])        
        .map(category => category.trim());            // enlever les espaces superflus

      // Supprimer les doublons
      return Array.from(new Set(categories));
    })
  );
}

importWords(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/import`, formData);
}
}