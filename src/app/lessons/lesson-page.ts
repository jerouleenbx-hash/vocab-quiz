import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navigation } from '../header/navigation';
import { NavigationService } from '../services/navigation.service';

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

  @ViewChild('lessonFrame') lessonFrame!: ElementRef<HTMLIFrameElement>;

  lessonId: string = '1';
  lessons: string[] = [];
  currentIndex: number = 0;
  currentLessonUrl!: SafeResourceUrl;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('lessonId') || '1';
      
      const numericId = Number(this.lessonId);
      if (!isNaN(numericId)) {
        this.navService.currentLesson.set(numericId);
      }
      this.navService.currentRubrique.set('lesson');

      this.loadLessonData(this.lessonId);
    });
  }

  loadLessonData(id: string): void {
    this.lessons = [
      `html/unit${id}_01.html`,
      `html/unit${id}_02.html`
    ];
    this.currentIndex = 0;
    this.updateLessonUrl();
  }

  updateLessonUrl(): void {
    this.currentLessonUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.lessons[this.currentIndex]
    );
  }

  onIframeLoad(): void {
    const iframe = this.lessonFrame?.nativeElement;
    if (!iframe || !iframe.contentWindow) return;

    try {
      // Réinitialise la hauteur pour permettre à l'iframe de rétrécir si la nouvelle page est plus courte
      iframe.style.height = '0px';
      
      const doc = iframe.contentWindow.document;
      const newHeight = Math.max(
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight
      );
      
      // Applique la hauteur exacte + une petite marge de sécurité
      iframe.style.height = `${newHeight + 20}px`;
    } catch (e) {
      console.warn('Impossible de redimensionner l\'iframe :', e);
    }
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateLessonUrl();
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.lessons.length - 1) {
      this.currentIndex++;
      this.updateLessonUrl();
    }
  }
}
