import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  // couleurs du vert clair au vert foncé pour Déf
  defButtonColors = ['#a8e6cf', '#81d4a7', '#5fcf80', '#3fbf60', '#2e9e4d', '#1e7c3b'];

  // couleurs du bleu clair au bleu foncé pour Word
  wordButtonColors = ['#a3d8f4', '#7cc1ea', '#56a9e0', '#3392d5', '#1c78bf', '#105ea5'];

  constructor(private router: Router) {}

  goToDefLevel(level: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindDefinition', level]);
    });
  }


  goToWordLevel(level: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/quizFindWord', level]);
    });
  }
}
