import { Routes } from '@angular/router';
import { QuizFindDefinition } from './quizFindDefinition/quizFindDefinition';
import { QuizFindWord } from './quizFindWord/quizFindWord';
import { Header } from './header/header';

export const routes: Routes = [
  { path: '', redirectTo: 'QuizFindDefinition/A1', pathMatch: 'full' },
  { path: 'quizFindDefinition/:difficulty', component: QuizFindDefinition },
  { path: 'quizFindWord/:difficulty', component: QuizFindWord }
];