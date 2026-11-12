import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  // Variable globale réactive initialisée à la leçon 1
  currentLesson = signal<number>(1);

  setLesson(lessonNumber: number): void {
    this.currentLesson.set(lessonNumber);
  }
}
