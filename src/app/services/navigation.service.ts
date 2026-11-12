import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

// Typage strict des rubriques possibles pour éviter les fautes de frappe
export type RubriqueType = 
  | 'lesson' 
  | 'quiz-definition' 
  | 'quiz-word' 
  | 'words-list' 
  | 'words-table' 
  | 'exercises';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router = inject(Router);

  // Variables globales réactives
  currentLesson = signal<number>(1);
  currentRubrique = signal<RubriqueType>('lesson');

  // Met à jour la leçon et navigue vers la rubrique actuelle avec ce nouveau numéro
  setLesson(lessonNumber: number): void {
    this.currentLesson.set(lessonNumber);
    this.navigate();
  }

  // Met à jour la rubrique et navigue avec le numéro de leçon actuel
  setRubrique(rubrique: RubriqueType): void {
    this.currentRubrique.set(rubrique);
    this.navigate();
  }

  private navigate(): void {
    this.router.navigate(['/', this.currentRubrique(), this.currentLesson()]);
  }
}
