import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import {
  ExerciseQuestion,
  ExerciseSection,
  SectionId
} from './exercises';

import { reviewOneExerciseSections } from './review-1-2-exercises';
import { reviewTwoExerciseSections } from './review-3-4-exercises';
import { reviewThreeExerciseSections } from './review-5-6-exercises';
import { reviewFourExerciseSections } from './review-7-8-exercises';
import { reviewFiveExerciseSections } from './review-9-10-exercises';
import { reviewSixExerciseSections } from './review-11-12-exercises';
import { reviewSevenExerciseSections } from './review-13-14-exercises';
import { reviewEightExerciseSections } from './review-15-16-exercises';
import { reviewNineExerciseSections } from './review-17-18-exercises';
import { reviewTenExerciseSections } from './review-19-20-exercises';
import { reviewElevenExerciseSections } from './review-21-22-exercises';
import { reviewTwelveExerciseSections } from './review-23-24-exercises';
import { reviewThirteenExerciseSections } from './review-25-26-exercises';
import { progressTestOneExerciseSections } from './progress-1';
import { progressTestTwoExerciseSections } from './progress-2';

export type ReviewId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './review.html',
  styleUrls: ['./../app.scss']
})
export class ReviewComponent {
  currentReview: ReviewId = 1;
  currentSectionIndex = 0;

readonly availableReviews: ReviewId[] = Array.from({ length: 13 }, (_, i) => (i + 1) as ReviewId);
readonly availableProgressTests: ReviewId[] = Array.of<ReviewId>(14, 15);



  private readonly reviewMap: Record<ReviewId, ExerciseSection[]> = {
    1: reviewOneExerciseSections,
    2: reviewTwoExerciseSections,
    3: reviewThreeExerciseSections,
    4: reviewFourExerciseSections,
    5: reviewFiveExerciseSections,
    6: reviewSixExerciseSections,
    7: reviewSevenExerciseSections,
    8: reviewEightExerciseSections,
    9: reviewNineExerciseSections,
    10: reviewTenExerciseSections,
    11: reviewElevenExerciseSections,
    12: reviewTwelveExerciseSections,
    13: reviewThirteenExerciseSections,
    14: progressTestOneExerciseSections,
    15: progressTestTwoExerciseSections
  };

  userAnswers: Record<string, string | undefined> = {};
  checkedSections: Record<string, boolean> = {};
  visibleCorrections: Record<string, boolean> = {};

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService
  ) {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(([params, queryParams]) => {
      const reviewParam = params.get('reviewNumber') ?? params.get('lessonId');
      const requestedSection = queryParams.get('section') as SectionId | null;

      const numericReview = Number(reviewParam);
      if (!isNaN(numericReview) && numericReview >= 1 && numericReview <= 15) {
        this.currentReview = numericReview as ReviewId;
      } else {
        this.currentReview = 1;
      }

      // Synchronisation avec la navigation globale si le service gère les reviews
      /*if (this.currentReview <= 13) {
        this.navService.currentLesson.set(this.unitStart);
      }
      */

      const sectionIndex = requestedSection
        ? this.sections.findIndex(section => section.id === requestedSection)
        : 0;
      this.currentSectionIndex = sectionIndex >= 0 ? sectionIndex : 0;
    });
  }

  get reviewNumber(): ReviewId {
    return this.currentReview;
  }

  get isProgressTest(): boolean {
    return this.currentReview === 14 || this.currentReview === 15;
  }

  get reviewTitle(): string {
    if (this.currentReview === 14) return 'Progress Test 1 (Units 1–12)';
    if (this.currentReview === 15) return 'Progress Test 2 (Units 13–26)';
    return `Review ${this.currentReview} (Units ${this.unitStart} & ${this.unitEnd})`;
  }

  get unitStart(): number {
    if (this.currentReview === 14) return 1;
    if (this.currentReview === 15) return 13;
    return this.currentReview * 2 - 1;
  }

  get unitEnd(): number {
    if (this.currentReview === 14) return 12;
    if (this.currentReview === 15) return 26;
    return this.currentReview * 2;
  }

  get sections(): ExerciseSection[] {
    return this.reviewMap[this.currentReview] ?? reviewOneExerciseSections;
  }

  get currentSection(): ExerciseSection {
    return this.sections[this.currentSectionIndex];
  }

  get lessonLink(): string[] {
    return ['/lesson', String(this.unitStart)];
  }

  get exerciseLink(): string[] {
    return ['/exercises', String(this.unitStart)];
  }

  selectReview(reviewId: ReviewId) {
    if (this.currentReview === reviewId) return;
    this.currentReview = reviewId;
    this.currentSectionIndex = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sectionStateKey(section: ExerciseSection): string {
    return `review-${this.currentReview}-${section.id}`;
  }

  previousExercise() {
    this.navigateToExercise(this.currentSectionIndex - 1);
  }

  nextExercise() {
    this.navigateToExercise(this.currentSectionIndex + 1);
  }

  private navigateToExercise(index: number) {
    if (index < 0 || index >= this.sections.length) return;
    this.currentSectionIndex = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  answerKey(section: ExerciseSection, questionNumber: number, gapIndex: number): string {
    return `${this.sectionStateKey(section)}-${questionNumber}-${gapIndex}`;
  }

  updateAnswer(section: ExerciseSection, questionNumber: number, gapIndex: number, event: Event) {
    this.setAnswer(section, questionNumber, gapIndex, (event.target as HTMLInputElement).value);
  }

  setAnswer(section: ExerciseSection, questionNumber: number, gapIndex: number, value: string) {
    this.userAnswers[this.answerKey(section, questionNumber, gapIndex)] = value;
  }

  isCorrect(section: ExerciseSection, question: ExerciseQuestion, gapIndex: number): boolean {
    const response = this.normalize(this.userAnswers[this.answerKey(section, question.number, gapIndex)] ?? '');
    return this.acceptedAnswers(question, gapIndex).some(answer => this.normalize(answer) === response);
  }

  acceptedAnswers(question: ExerciseQuestion, gapIndex: number): string[] {
    const answers = question.answers[gapIndex];
    return typeof answers === 'string' ? [answers] : answers;
  }

  answerOptions(question: ExerciseQuestion, gapIndex: number): string[] {
    const options = question.options;
    if (!options) return [];
    if (options.length > 0 && typeof options[0] === 'string') {
      return gapIndex === 0 ? (options as string[]) : [];
    }
    return (options as string[][])[gapIndex] ?? [];
  }

  sectionScore(section: ExerciseSection): number {
    return section.questions.reduce(
      (score, question) =>
        score + question.answers.filter((_, gapIndex) => this.isCorrect(section, question, gapIndex)).length,
      0
    );
  }

  sectionGapCount(section: ExerciseSection): number {
    return section.questions.reduce((count, question) => count + question.answers.length, 0);
  }

  get totalScore(): number {
    return this.sections.reduce((total, section) => total + this.sectionScore(section), 0);
  }

  get totalMaxScore(): number {
    return this.sections.reduce((total, section) => total + this.sectionGapCount(section), 0);
  }

  toggleCorrection(section: ExerciseSection) {
    const key = this.sectionStateKey(section);
    this.visibleCorrections[key] = !this.visibleCorrections[key];
  }

  private normalize(value: string): string {
    return value.trim().toLocaleLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
  }
}
