import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { MultipleChoiceWord } from '../models/multipleChoiceWord';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-list.html',
  styleUrls: ['./word-list.scss']
})
export class WordListComponent {

  words$: Observable<MultipleChoiceWord[]>;
  revealed = new Set<number>();

  constructor(
    private wordService: WordService,
    private globalService: GlobalService
  ) {
    // combine tag et level pour filtrer les mots
    this.words$ = combineLatest([this.globalService.tag$, this.globalService.level$]).pipe(
      switchMap(([tag, level]) => {
        if (!tag) return of([]);  // pas de tag sélectionné
        return this.wordService.listWords(level, tag);
      })
    );
  }

  toggleReveal(word: MultipleChoiceWord) {
    if (this.revealed.has(word.id)) this.revealed.delete(word.id);
    else this.revealed.add(word.id);
  }

  isRevealed(word: MultipleChoiceWord) {
    return this.revealed.has(word.id);
  }
}