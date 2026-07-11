import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { SimpleWord } from '../models/interfaces';

@Component({
  selector: 'app-word-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-table.html',
  styleUrls: ['./word-table.scss']
})
export class WordTableComponent {

  private pageSubject = new BehaviorSubject<number>(1);
  page$ = this.pageSubject.asObservable();

  pageSize = 8000;

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



  getScoreColor(word: SimpleWord): string {
    
    switch (word.score) {
      case 0 : return `rgb(100,100,100)`;
      case -1 : return `rgb(255,0,0)`;
      case 1 : return `rgba(214, 226, 50, 1)`;
      case 2 : return `rgba(21, 21, 161, 1)`;
      case 3 : return `rgba(12, 97, 25, 1)`;
      default : return `rgb(255,255,255)`;
    }    
}
}