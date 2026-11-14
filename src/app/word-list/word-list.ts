import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // 1. Import de ActivatedRoute
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { NavigationService } from '../services/navigation.service';
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

  pageSize = 1500;

  words$: Observable<SimpleWord[]>;
  totalPages$: Observable<number>;

  revealed = new Set<number>();
  unitTag$: Observable<string>;

  constructor(
    private route: ActivatedRoute, // 2. Injection dans le constructor
    private navService: NavigationService,
    private wordService: WordService,
    private globalService: GlobalService
  ) {

    // 3. Récupération du paramètre 'lessonId' depuis l'URL et conversion en "Unit XX"
    this.unitTag$ = this.route.paramMap.pipe(
      map(params => params.get('lessonId') || '1'),
      tap(lessonId => {
        // Synchronisation de la barre de navigation globale
        const numericId = Number(lessonId);
        if (!isNaN(numericId)) {
          this.navService.currentLesson.set(numericId);
        }
        this.navService.currentRubrique.set('words-list');

        // Réinitialisation de la pagination et des mots révélés au changement de leçon
        this.pageSubject.next(1);
        this.revealed.clear();
      }),
      map(lessonId => this.getUnitTag(lessonId))
    );

    // 4. Remplacement de this.globalService.tag$ par unitTag$
    const allWords$ = combineLatest([
      this.unitTag$,
      this.globalService.type$
    ]).pipe(
      switchMap(([unitTag, type]) => {
        //return this.wordService.getAllWords(unitTag);
        return this.wordService.getWordsByTag(unitTag);
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

  getUnitTag(lessonId: number | string): string {
    const num = Number(lessonId) || 1;
    // Arrondit au nombre pair supérieur (1->2, 2->2, 3->4, 4->4... 25->26, 26->26)
    const unitNumber = Math.ceil(num / 2) * 2;
    
    // Ajoute un '0' devant si le nombre a moins de 2 chiffres (ex: 2 -> "02")
    return `Unit ${unitNumber.toString().padStart(2, '0')}`;
  }
}
