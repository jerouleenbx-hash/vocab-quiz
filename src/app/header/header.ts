import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WordService } from '../services/word.service';
import { GlobalService } from '../services/global.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
  levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'All'];

  wordButtonColors = ['#a3d8f4', '#7cc1ea', '#56a9e0', '#3392d5', '#1c78bf', '#105ea5', '#0a4680'];

  tags$!: Observable<string[]>;
  categories$!: Observable<string[]>;
  selectedCategory: string = "BASIC WORDS";
  selectedTag: string = "Basic words";
  selectedLevel: string = "All"; // par défaut, ou le premier level
  selectedAction: 'list' | 'quizDef' | 'quizWord' = 'list'; // action sélectionnée par défaut

  showPopup: boolean = false;
  popupMessage: string = 'a';

  constructor(
    private router: Router,
    private wordService: WordService,
    private globalService: GlobalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.categories$ = this.wordService.getAllCategories().pipe(
    map(categories => categories.sort((a, b) => a.localeCompare(b)))
    );

    this.tags$ = this.wordService.getAllTags(this.selectedCategory).pipe(
    map(tags => tags.sort((a, b) => a.localeCompare(b)))
    );

    // définir le tag par défaut dans le service
    this.globalService.setCategory(this.selectedCategory);
    this.globalService.setTag(this.selectedTag);
    
    this.goToList();

  }

  goToDefLevel(level: string) {
    // navigation programmatique
  }

  goToWordLevel(level: string) {
    // navigation programmatique
  }

  goToQuizDefinition() {
      this.selectedAction = 'quizDef';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindDefinition']);
    });
  }

  goToQuizWord() {
      this.selectedAction = 'quizWord';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindWord']);
    });
  }

  goToList() {
      this.globalService.setTag(this.selectedTag);
      this.selectedAction = 'list';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/listWord']);
      this.cdr.detectChanges(); // Force la détection de changement
    });
  }
  

  changeLevel(level: string) {
    this.globalService.setLevel(level);
    this.selectedLevel = level;       // mémoriser le level choisi
  }

  onTagChangeFromEvent(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select?.value) {
      this.changeLevel('All');
      this.globalService.setTag(select.value);
      this.selectedTag = select.value;
      this.goToList();
    }
    this.cdr.detectChanges(); // Force la détection de changement
  }


  onCategoryChangeFromEvent(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select?.value) {
      this.changeLevel('All');
      this.globalService.setCategory(select.value);
      this.selectedCategory = select.value;
      this.tags$ = this.wordService.getAllTags(this.selectedCategory).pipe(
      map(tags => tags.sort((a, b) => a.localeCompare(b)))
      );
      // Pour obtenir le premier élément
      this.tags$.subscribe(tags => {
        if (tags.length > 0) {
          this.selectedTag = tags[0];
          this.goToList();
        }
      });
    }
    this.cdr.detectChanges(); // Force la détection de changement
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
  
    if (file) {
    this.wordService.importWords(file).subscribe(
      (response: any) => {
        this.showPopupMessage("Fichier envoyé avec succès !");
      },
      (error) => {
        if (error.error?.error) {
          this.showPopupMessage(error.error.error);
        } else {
          this.showPopupMessage("Erreur serveur");
        }
      }
    );
    }
  }

  showPopupMessage(message: string) {
    this.popupMessage = message;
    this.showPopup = true;
    this.cdr.detectChanges(); // 🔥 force l'affichage immédiat
  }

  closePopup() {
    this.showPopup = false;
  }

}