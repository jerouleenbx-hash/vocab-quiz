import { Routes } from '@angular/router';
import { QuizFindDefinition } from './quizFindDefinition/quizFindDefinition';
import { QuizFindWord } from './quizFindWord/quizFindWord';
import { Header } from './header/header';
import { WordListComponent } from './word-list/word-list';
import { WordTableComponent } from './word-table/word-table';
import { ExercisesComponent } from './exercises/exercises';
import { UnitTwoLessonPageComponent } from './exercises/unit-two-lesson-page';
import { ReviewOneComponent } from './exercises/review-one';


export const routes: Routes = [
  { path: '', redirectTo: 'QuizFindDefinition', pathMatch: 'full' },
  { path: 'quizFindDefinition', component: QuizFindDefinition },
  { path: 'quizFindWord', component: QuizFindWord },
  { path: 'listWord', component: WordListComponent },
  { path: 'tableWord', component: WordTableComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'review/:reviewNumber', component: ReviewOneComponent },
  { path: 'lessons/:unit/:category', component: UnitTwoLessonPageComponent },
  { path: 'lessons/1', redirectTo: 'lessons/1/unit-overview', pathMatch: 'full' },
  { path: 'lessons/2', redirectTo: 'lessons/2/thinking', pathMatch: 'full' },
  { path: 'unit2-lesson', redirectTo: 'lessons/2/thinking', pathMatch: 'full' },
  { path: 'unit2-lesson/:category', redirectTo: 'lessons/2/:category' },
];