import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

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
  levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'All'];

  wordButtonColors = ['#a3d8f4', '#7cc1ea', '#56a9e0', '#3392d5', '#1c78bf', '#105ea5', '#0a4680'];

  tags$!: Observable<string[]>;     
  selectedTag: string = "Basic words";
  selectedLevel: string = "All"; // par défaut, ou le premier level
  selectedAction: 'list' | 'quizDef' | 'quizWord' = 'list'; // action sélectionnée par défaut

  constructor(
    private router: Router,
    private wordService: WordService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.tags$ = this.wordService.getAllTags();
     // définir le tag par défaut dans le service
    this.globalService.setTag(this.selectedTag);
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
      this.selectedAction = 'list';
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/listWord']);
    });
  }
  

  changeLevel(level: string) {
    this.globalService.setLevel(level);
    this.selectedLevel = level;       // mémoriser le level choisi
  }

  onTagChangeFromEvent(event: Event) {
  const select = event.target as HTMLSelectElement | null;
  if (select?.value) {
    this.globalService.setTag(select.value);
    this.selectedTag = select.value;
  }
  console.log("New tag : " + this.selectedTag);
}


}