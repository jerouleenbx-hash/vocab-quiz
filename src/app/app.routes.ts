import { Routes } from '@angular/router';
import { QuizFindDefinition } from './quizFindDefinition/quizFindDefinition';
import { QuizFindWord } from './quizFindWord/quizFindWord';
import { Header } from './header/header';
import { WordListComponent } from './word-list/word-list';
import { WordTableComponent } from './word-table/word-table';
import { ExercisesComponent } from './exercises/exercises';
import { ReviewOneComponent } from './exercises/review-one';
import { LessonComponent } from './lessons/lesson-page';

export const routes: Routes = [
  { path: 'lesson/:lessonId', component: LessonComponent },
  { path: 'quiz-definition/:lessonId', component: QuizFindDefinition },
  { path: 'quiz-word/:lessonId', component: QuizFindWord },
  { path: 'words-list/:lessonId', component: WordListComponent },
  { path: 'words-table/:lessonId', component: WordTableComponent },
  { path: 'exercises/:lessonId', component: ExercisesComponent },
];
