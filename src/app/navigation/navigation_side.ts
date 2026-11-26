import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService, RubriqueType } from '../services/navigation.service';

@Component({
  selector: 'app-navigation-side',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation_side.html',
  styleUrls: ['../app.scss']
})
export class Navigation_Side {
  
  rubriques: { path: RubriqueType; label: string }[] = [
    { path: 'lesson', label: 'Lessons' },
    { path: 'exercises', label: 'Exercises' },
    { path: 'quiz-word', label: 'Quiz Words' },
    { path: 'quiz-definition', label: 'Quiz Definitions' }
  ];

  navService = inject(NavigationService);
}
