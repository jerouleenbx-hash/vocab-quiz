import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {

  wordButtonColors = ['#a3d8f4', '#7cc1ea', '#56a9e0', '#3392d5', '#1c78bf', '#105ea5', '#0a4680'];

  tags$!: Observable<string[]>;
  types$!: Observable<string[]>;
  selectedTag: string = 'Unit 02';
  selectedType: string = 'All';
  selectedAction: 'table' | 'list' | 'quizDef' | 'quizWord' | 'exercises' = 'list';

  showPopup: boolean = false;
  popupMessage: string = 'a';

  constructor(
    private router: Router,
    private wordService: WordService,
    private globalService: GlobalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.types$ = this.wordService.getAllTypes().pipe(
      map(types => types.sort((a, b) => a.localeCompare(b)))
    );

    // 1) Initialiser le type par défaut
    this.globalService.setType(this.selectedType);

    // 2) Charger tous les tags directement
    this.tags$ = this.wordService.getAllTags().pipe(
      map(tags => tags.sort((a, b) => a.localeCompare(b)))
    );

    // 3) Choisir le tag par défaut, puis naviguer
    this.tags$.subscribe(tags => {
      const defaultTagExists = tags.includes(this.selectedTag);
      this.selectedTag = defaultTagExists ? this.selectedTag : 'All';

      this.globalService.setTag(this.selectedTag);

      if (
        this.router.url.startsWith('/exercises') ||
        this.router.url.startsWith('/lessons') ||
        this.router.url.startsWith('/review') ||
        this.router.url.startsWith('/unit2-lesson')
      ) {
        this.selectedAction = 'exercises';
      } else {
        this.goToList();
      }
    });
  }

  goToQuizDefinition() {
    this.selectedAction = 'quizDef';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindDefinition']);
    });
  }

  goToQuizWord() {
    console.log('Quiz word');
    this.selectedAction = 'quizWord';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindWord']);
    });
  }

  goToList() {
    this.globalService.setTag(this.selectedTag);
    this.selectedAction = 'list';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/lesson1']);
      this.cdr.detectChanges();
    });
  }

  goToTable() {
    this.globalService.setTag(this.selectedTag);
    this.selectedAction = 'table';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/tableWord']);
      this.cdr.detectChanges();
    });
  }

  goToExercises() {
    this.selectedAction = 'exercises';
    this.router.navigate(['/exercises']);
  }

  onTagChangeFromEvent(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select?.value) {
      this.globalService.setTag(select.value);
      this.selectedTag = select.value;
      this.goToList();
    }
    this.cdr.detectChanges();
  }

  onTypeChangeFromEvent(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select?.value) {
      this.selectedType = select.value;
      this.globalService.setType(this.selectedType);
      this.goToList();
    }
  }

  showPopupMessage(message: string) {
    this.popupMessage = message;
    this.showPopup = true;
    this.cdr.detectChanges();
  }

  closePopup() {
    this.showPopup = false;
  }
}
