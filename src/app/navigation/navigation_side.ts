import { Component, inject, computed } from '@angular/core';
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
  navService = inject(NavigationService);

  private allRubriques: { path: RubriqueType; label: string }[] = [
    { path: 'lesson', label: 'Lessons' },
    { path: 'exercises', label: 'Exercises' },
    { path: 'quiz-word', label: 'Quiz Words' },
    { path: 'quiz-definition', label: 'Quiz Definitions' }
  ];

  rubriques = computed(() => {
    const lesson = this.navService.currentLesson();
    const isEven = lesson % 2 === 0;

    if (isEven) {
      const reviewId = lesson / 2;
      const items: { path: RubriqueType; label: string }[] = [
        ...this.allRubriques,
        { path: 'review', label: `Review ${reviewId}` }
      ];

      if (lesson === 12) {
        items.push({ path: 'progress-test', label: 'Progress Test 1' });
      } else if (lesson === 26) {
        items.push({ path: 'progress-test', label: 'Progress Test 2' });
      }

      return items;
    }

    return this.allRubriques.filter(r => !r.path.startsWith('quiz-'));
  });
}
