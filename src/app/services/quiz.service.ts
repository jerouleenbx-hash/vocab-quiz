import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable, of } from 'rxjs';
import { SimpleWord, MultipleChoiceWord } from '../models/interfaces'

export interface WordProgress {
  id: number;
  userid: number;
  word: string;
  date: string;
  correct: number;
}

export interface WordJson {
  id: number;
  value: string; // ou 'word' selon la structure de votre JSON
  definition: string;
  difficulty: string;
  type: string;
  category: string;
  tags: string | string[]; // selon si c'est une chaîne "Unit 02, ..." ou un tableau ["Unit 02"]
  example_sentence: string;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly jsonUrl = '/words.json'; 

  constructor(private http: HttpClient) {}

   getQuizDefinition(tag: string): Observable<MultipleChoiceWord[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map((allWords): MultipleChoiceWord[] => {
        const searchTag = tag.toLowerCase().trim();

        // 1. Filtrer par tag
        let filteredWords = allWords.filter((w) => {
          return Array.isArray(w.tags)
            ? w.tags.some((t: string) => t.toLowerCase().includes(searchTag))
            : String(w.tags || '').toLowerCase().includes(searchTag);
        });

        // 2. Mélanger et limiter à 8 questions
        filteredWords = this.shuffleArray(filteredWords).slice(0, 8);

        // 3. Regrouper par type
        const byType: Record<string, any[]> = {};
        for (const w of allWords) {
          const typeKey = w.type || 'default';
          if (!byType[typeKey]) {
            byType[typeKey] = [];
          }
          byType[typeKey].push(w);
        }

        // 4. Formater les résultats avec w.word ✅
        return filteredWords.map((w) => ({
          id: w.id,
          word: w.word || w.value, // 👈 C'est ici que q.word était undefined !
          definition: w.definition,
          example: w.example_sentence || w.example,
          choices: this.buildChoicesDefinition(w, byType),
        }));
      })
    );
  }


  // Génère 4 définitions au choix (1 bonne + 3 distracteurs du même type)
  private buildChoicesDefinition(targetWord: WordJson, byType: Record<string, WordJson[]>): string[] {
    const sameTypeWords = byType[targetWord.type] || [];

    const distractors = sameTypeWords
      .filter((w) => w.id !== targetWord.id && w.definition !== targetWord.definition)
      .map((w) => w.definition);

    const selectedDistractors = this.shuffleArray(distractors).slice(0, 3);

    return this.shuffleArray([targetWord.definition, ...selectedDistractors]);
  }

   getQuizWord(tag: string): Observable<MultipleChoiceWord[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map((allWords): MultipleChoiceWord[] => {
        const searchTag = tag.toLowerCase().trim();

        // 1. Filtrer uniquement par tag
        let filteredWords = allWords.filter((w) => {
          return Array.isArray(w.tags)
            ? w.tags.some((t: string) => t.toLowerCase().includes(searchTag))
            : String(w.tags || '').toLowerCase().includes(searchTag);
        });

        // 2. Mélanger et limiter à 8 questions
        filteredWords = this.shuffleArray(filteredWords).slice(0, 8);

        // 3. Regrouper par type pour les distracteurs
        const byType: Record<string, any[]> = {};
        for (const w of allWords) {
          const typeKey = w.type || 'default';
          if (!byType[typeKey]) {
            byType[typeKey] = [];
          }
          byType[typeKey].push(w);
        }

        // 4. Formater les résultats avec w.word (et non w.value)
        return filteredWords.map((w) => ({
          id: w.id,
          word: w.word, // ✅ Correction ici
          definition: w.definition,
          example: w.example_sentence || w.example,
          choices: this.buildChoicesWord(w, byType),
        }));
      })
    );
  }

  private buildChoicesWord(targetWord: any, byType: Record<string, any[]>): string[] {
    const typeKey = targetWord.type || 'default';
    const sameTypeWords = byType[typeKey] || [];

    // ✅ Utiliser w.word au lieu de w.value
    const distractors = sameTypeWords
      .filter((w) => w.id !== targetWord.id && w.word && w.word !== targetWord.word)
      .map((w) => w.word);

    // Prendre 3 distracteurs uniques au hasard
    const uniqueDistractors = Array.from(new Set(distractors));
    const selectedDistractors = this.shuffleArray(uniqueDistractors).slice(0, 3);

    // Combiner la bonne réponse avec les 3 distracteurs
    return this.shuffleArray([targetWord.word, ...selectedDistractors]);
  }


  // Utilitaire de mélange (Algorithme de Fisher-Yates)
  private shuffleArray<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

}



// Export MultipleChoiceWord so it can be imported from this file
export type { MultipleChoiceWord };