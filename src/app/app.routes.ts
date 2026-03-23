import { Routes } from '@angular/router';
import { QuizFindDefinition } from './quizFindDefinition/quizFindDefinition';
import { QuizFindWord } from './quizFindWord/quizFindWord';
import { Header } from './header/header';
import { WordListComponent } from './word-list/word-list';
import { Tools } from './tools/tools';

export const routes: Routes = [
  { path: '', redirectTo: 'QuizFindDefinition', pathMatch: 'full' },
  { path: 'quizFindDefinition', component: QuizFindDefinition },
  { path: 'quizFindWord', component: QuizFindWord },
  { path: 'listWord', component: WordListComponent },
];