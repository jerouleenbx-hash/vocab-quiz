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
  types$!: Observable<string[]>;
  selectedCategory: string = "Destination C1-C2";
  selectedTag: string = "Unit 02";
  selectedType: string = 'All';
  selectedLevel: string = "All"; // par défaut, ou le premier level
  selectedAction: 'table' | 'list' | 'quizDef' | 'quizWord' | 'exercises' = 'list'; // action sélectionnée par défaut

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
  this.types$ = this.wordService.getAllTypes().pipe(
    map(types => types.sort((a, b) => a.localeCompare(b)))
  );

  // 1) set catégorie par défaut
  this.globalService.setCategory(this.selectedCategory);
  this.globalService.setType(this.selectedType);

  // 2) charger les tags de cette catégorie
  this.tags$ = this.wordService.getAllTags(this.selectedCategory).pipe(
    map(tags => tags.sort((a, b) => a.localeCompare(b)))
  );

  // 3) une fois les tags chargés, choisir le tag par défaut, puis naviguer
  this.tags$.subscribe(tags => {
    // si ton tag par défaut existe dans la liste => on le garde, sinon => premier tag
    const defaultTagExists = tags.includes(this.selectedTag);
    this.selectedTag = defaultTagExists ? this.selectedTag : 'All';

    this.globalService.setTag(this.selectedTag);
    this.changeLevel('All'); // optionnel, si tu veux garantir le niveau

    if (this.router.url.startsWith('/exercises') || this.router.url.startsWith('/lessons') || this.router.url.startsWith('/review') || this.router.url.startsWith('/unit2-lesson')) {
      this.selectedAction = 'exercises';
    } else {
      this.goToList();
    }
  });
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
      this.router.navigate(['/listWord']);
      this.cdr.detectChanges(); // Force la détection de changement
    });
  }


  goToTable() {
      this.globalService.setTag(this.selectedTag);
      this.selectedAction = 'table';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/tableWord']);
      this.cdr.detectChanges(); // Force la détection de changement
    });
  }

  goToExercises() {
    this.selectedAction = 'exercises';
    this.router.navigate(['/exercises']);
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
      this.selectedTag = 'All';
      this.globalService.setTag(this.selectedTag);
      this.tags$ = this.wordService.getAllTags(this.selectedCategory).pipe(
      map(tags => tags.sort((a, b) => a.localeCompare(b)))
      );
      this.goToList();
    }
    this.cdr.detectChanges(); // Force la détection de changement
  }

  onTypeChangeFromEvent(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select?.value) {
      this.selectedType = select.value;
      this.globalService.setType(this.selectedType);
      this.goToList();
    }
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