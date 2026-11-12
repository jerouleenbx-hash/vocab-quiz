import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { NavigationService } from '../services/navigation.service';
import { SimpleWord } from '../models/interfaces';

type SortColumn = 'word' | 'definition' | 'example_sentence' | 'type';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-word-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-table.html',
  styleUrls: ['./word-table.scss']
})
export class WordTableComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private navService = inject(NavigationService);
  private wordService = inject(WordService);
  private globalService = inject(GlobalService);

  private pageSubject = new BehaviorSubject<number>(1);
  page$ = this.pageSubject.asObservable();
  
  private sortSubject = new BehaviorSubject<{ column: SortColumn; direction: SortDirection }>({
    column: 'word',
    direction: 'asc'
  });

  sortColumn: SortColumn = 'word';
  sortDirection: SortDirection = 'asc';
  pageSize = 8000;

  unitTag$: Observable<string>;
  words$: Observable<SimpleWord[]>;
  totalPages$: Observable<number>;

  revealed = new Set<number>();

  constructor() {
    // 1. On écoute le paramètre de l'URL et on le convertit en "Unit XX"
    this.unitTag$ = this.route.paramMap.pipe(
      map(params => params.get('lessonId') || '1'),
      tap(lessonId => {
        // Synchronisation de la barre de navigation globale
        const numericId = Number(lessonId);
        if (!isNaN(numericId)) {
          this.navService.currentLesson.set(numericId);
        }
        this.navService.currentRubrique.set('words-table');
        
        // Réinitialiser la page et les mots révélés quand on change de leçon
        this.pageSubject.next(1);
        this.revealed.clear();
      }),
      map(lessonId => this.getUnitTag(lessonId))
    );

    // 2. On passe unitTag$ directement à getAllWords (à la place de globalService.tag$)
    const allWords$ = combineLatest([
      this.unitTag$,
      this.globalService.type$
    ]).pipe(
      switchMap(([unitTag, type]) => {
        //return this.wordService.getAllWords(unitTag, this.globalService.currentCategory, type);
        return this.wordService.getWordsByTag(unitTag);
      })
    );

    this.totalPages$ = allWords$.pipe(
      map(words => Math.ceil(words.length / this.pageSize))
    );

    this.words$ = combineLatest([allWords$, this.page$, this.sortSubject]).pipe(
      map(([words, page, sort]) => {
        const sortedWords = [...words].sort((a, b) => {
          const comparison = String(a[sort.column] ?? '').localeCompare(
            String(b[sort.column] ?? ''),
            'en',
            { sensitivity: 'base', numeric: true }
          );
          return sort.direction === 'asc' ? comparison : -comparison;
        });
        const start = (page - 1) * this.pageSize;
        return sortedWords.slice(start, start + this.pageSize);
      })
    );
  }

  ngOnInit(): void {}

  toggleSort(column: SortColumn) {
    const direction = this.sortColumn === column && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortColumn = column;
    this.sortDirection = direction;
    this.sortSubject.next({ column, direction });
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
   
  getUnitTag(lessonId: number | string): string {
    const num = Number(lessonId) || 1;
    // Arrondit au nombre pair supérieur (1->2, 2->2, 3->4, 4->4... 25->26, 26->26)
    const unitNumber = Math.ceil(num / 2) * 2;
    
    // Ajoute un '0' devant si le nombre a moins de 2 chiffres (ex: 2 -> "02")
    return `Unit ${unitNumber.toString().padStart(2, '0')}`;
  }
}
