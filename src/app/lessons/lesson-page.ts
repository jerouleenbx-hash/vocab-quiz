import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navigation } from '../header/navigation';
import { NavigationService } from '../services/navigation.service'; // Ajustez le chemin si nécessaire

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson-page.html',
  styleUrls: ['../exercises/exercises.scss'],
  standalone: true,
  imports: [CommonModule, Navigation]
})
export class LessonComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  private navService = inject(NavigationService);

  lessonId: string = '1';
  lessons: string[] = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('lessonId') || '1';
      
      // Synchronisation avec le service global (utile au rafraîchissement ou lien direct)
      const numericId = Number(this.lessonId);
      if (!isNaN(numericId)) {
        this.navService.currentLesson.set(numericId);
      }
      this.navService.currentRubrique.set('lesson');

      this.loadLessonData(this.lessonId);
    });
  }

  loadLessonData(id: string) {
    this.lessons = [
      `unit${id}_01.html`,
      `unit${id}_02.html`
    ];

    this.currentIndex = 0;
  }

 get lessonPaths(): string[] {
    return [
      `html/unit${this.lessonId}_01.html`,
      `html/unit${this.lessonId}_02.html`
    ];
  }

  get currentLessonUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.lessonPaths[this.currentIndex]);
  }

  prevImage() { if (this.currentIndex > 0) this.currentIndex--; }
  nextImage() { if (this.currentIndex < this.lessons.length - 1) this.currentIndex++; }
}
