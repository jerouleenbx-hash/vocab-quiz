import { Routes } from '@angular/router';
import { QuizFindDefinition } from './quizFindDefinition/quizFindDefinition';
import { QuizFindWord } from './quizFindWord/quizFindWord';
import { ExercisesComponent } from './exercises/exercises';
import { ReviewComponent } from './exercises/review';
import { LessonComponent } from './lessons/lesson-page';

export const routes: Routes = [
  { path: 'lesson/:lessonId', component: LessonComponent },
  { path: 'quiz-definition/:lessonId', component: QuizFindDefinition },
  { path: 'quiz-word/:lessonId', component: QuizFindWord },
  { path: 'exercises/:lessonId', component: ExercisesComponent },
  { path: 'review/:lessonId', component: ReviewComponent },
];
