import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

// Typage strict des rubriques possibles pour éviter les fautes de frappe
export type RubriqueType =
  | 'lesson'
  | 'exercises'
  | 'quiz-word'
  | 'quiz-definition'
  | 'review'
  | 'progress-test';


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
    this.currentRubrique.set('lesson');
    this.navigate();
  }

  // Met à jour la rubrique et navigue avec le numéro de leçon actuel
    setRubrique(rubrique: RubriqueType) {
    this.currentRubrique.set(rubrique);
    const lesson = this.currentLesson();

    if (rubrique === 'review') {
      const reviewNumber = Math.ceil(lesson / 2);
      this.router.navigate(['/review', reviewNumber]);
      return;
    }

    if (rubrique === 'progress-test') {
      const testNumber = lesson <= 12 ? 14 : 15;
      this.router.navigate(['/review', testNumber]);
      return;
    }

    this.router.navigate(['/', rubrique, lesson]);
  }



  private navigate(): void {
    this.router.navigate(['/', this.currentRubrique(), this.currentLesson()]);
  }
}
