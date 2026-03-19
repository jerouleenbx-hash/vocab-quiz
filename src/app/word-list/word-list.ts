import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { SimpleWord } from '../models/interfaces';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-list.html',
  styleUrls: ['./word-list.scss']
})
export class WordListComponent {

  private pageSubject = new BehaviorSubject<number>(1);
  page$ = this.pageSubject.asObservable();

  pageSize = 15;

  words$: Observable<SimpleWord[]>;
  totalPages$: Observable<number>;

  revealed = new Set<number>();

  constructor(
    private wordService: WordService,
    private globalService: GlobalService
  ) {

    const allWords$ = combineLatest([
      this.globalService.tag$,
      this.globalService.level$
    ]).pipe(
      switchMap(([tag, level]) => {
        if (!tag) return of([]);
        return this.wordService.getAllWords(level, tag);
      })
    );

    this.totalPages$ = allWords$.pipe(
      map(words => Math.ceil(words.length / this.pageSize))
    );

    this.words$ = combineLatest([allWords$, this.page$]).pipe(
      map(([words, page]) => {
        const start = (page - 1) * this.pageSize;
        return words.slice(start, start + this.pageSize);
      })
    );
  }

  nextPage(totalPages: number) {
    const current = this.pageSubject.value;
    if (current < totalPages) {
      this.pageSubject.next(current + 1);
    }
  }

  prevPage() {
    const current = this.pageSubject.value;
    if (current > 1) {
      this.pageSubject.next(current - 1);
    }
  }

  toggleReveal(word: SimpleWord) {
    if (this.revealed.has(word.id)) this.revealed.delete(word.id);
    else this.revealed.add(word.id);
  }

  isRevealed(word: SimpleWord) {
    return this.revealed.has(word.id);
  }
}