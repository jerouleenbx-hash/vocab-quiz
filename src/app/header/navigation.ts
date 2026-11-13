import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService, RubriqueType } from '../services/navigation.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrls: ['../exercises/exercises.scss']
})
export class Navigation {
  lessons: number[] = Array.from({ length: 26 }, (_, i) => i + 1);
  
  rubriques: { path: RubriqueType; label: string }[] = [
    { path: 'lesson', label: 'Lessons' },
    { path: 'exercises', label: 'Exercises' },
    { path: 'words-table', label: 'Words table' },
    { path: 'words-list', label: 'Words list' }
  ];

  navService = inject(NavigationService);
}
