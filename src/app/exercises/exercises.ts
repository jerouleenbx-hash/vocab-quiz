import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { extraExerciseSections } from './exercise-extra-sections';
import { NavigationService } from '../services/navigation.service'; // Ajustez le chemin si besoin
import { unitOneExerciseSections, unitTwoExerciseSections } from './unit-1-2-exercises';
import { unitThreeExerciseSections, unitFourExerciseSections } from './unit-3-4-exercises';
import { unitFiveExerciseSections, unitSixExerciseSections } from './unit-5-6-exercises';
import {  unitSevenExerciseSections, unitEightExerciseSections } from './unit-7-8-exercises';
import { unitNineExerciseSections, unitTenExerciseSections  } from './unit-9-10-exercises';
import { unitElevenExerciseSections, unitTwelveExerciseSections } from './unit-11-12-exercises';
import { unitThirteenExerciseSections, unitFourteenExerciseSections } from './unit-13-14-exercises';
import { unitFifteenExerciseSections, unitSixteenExerciseSections } from './unit-15-16-exercises';
import { unitSeventeenExerciseSections, unitEighteenExerciseSections  } from './unit-17-18-exercises';
import { unitNineteenExerciseSections, unitTwentyExerciseSections } from './unit-19-20-exercises';
import { unitTwentyOneExerciseSections, unitTwentyTwoExerciseSections } from './unit-21-22-exercises';
import { unitTwentyThreeExerciseSections, unitTwentyFourExerciseSections } from './unit-23-24-exercises';
import { unitTwentyFiveExerciseSections, unitTwentySixExerciseSections } from './unit-25-26-exercises';

export type SectionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O'| 'P';
export type UnitId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;
export type LessonCategoryId =
  | 'unit-overview'
  | 'present-tenses' | 'present-perfect' | 'stative-verbs'
  | 'past-time'
  | 'thinking' | 'learning' | 'phrasal-verbs' | 'collocations' | 'idioms' | 'word-formation'
  | 'change-topic' | 'technology-topic' | 'technology-phrasal' | 'technology-collocations' | 'technology-idioms' | 'technology-word-formation'
  | 'future-time' | 'time-topic' | 'work-topic' | 'time-work-phrasal' | 'time-work-collocations' | 'time-work-idioms' | 'time-work-word-formation'
  | 'passives' | 'movement-topic' | 'transport-topic' | 'movement-phrasal' | 'movement-collocations' | 'movement-idioms' | 'movement-word-formation';

export interface ExerciseQuestion {
  number: number;
  parts: string[];
  answers: Array<string[] | string>;
  options?: string[][] | string[];
}

export interface ExerciseSection {
  id: SectionId;
  unitId?: UnitId;
  title: string;
  instruction: string;
  wordBox?: string[];
  questions: ExerciseQuestion[];
}

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './exercises.html',
  styleUrls: ['./exercises.scss']
})
export class ExercisesComponent {
  currentUnit: UnitId = 1;
  currentSectionIndex = 0;


  readonly unit1Sections = unitOneExerciseSections;
  readonly unit2Sections = unitTwoExerciseSections;
  readonly unit3Sections = unitThreeExerciseSections;
  readonly unit4Sections = unitFourExerciseSections;
  readonly unit5Sections = unitFiveExerciseSections;
  readonly unit6Sections = unitSixExerciseSections;
  readonly unit7Sections = unitSevenExerciseSections;
  readonly unit8Sections = unitEightExerciseSections;
  readonly unit9Sections = unitNineExerciseSections;
  readonly unit10Sections = unitTenExerciseSections;
  readonly unit11Sections = unitElevenExerciseSections;
  readonly unit12Sections = unitTwelveExerciseSections;
  readonly unit13Sections = unitThirteenExerciseSections;
  readonly unit14Sections = unitFourteenExerciseSections;
  readonly unit15Sections = unitFifteenExerciseSections;
  readonly unit16Sections = unitSixteenExerciseSections;
  readonly unit17Sections = unitSeventeenExerciseSections;
  readonly unit18Sections = unitEighteenExerciseSections;
  readonly unit19Sections = unitNineteenExerciseSections;
  readonly unit20Sections = unitTwentyExerciseSections;
  readonly unit21Sections = unitTwentyOneExerciseSections;
  readonly unit22Sections = unitTwentyTwoExerciseSections;
  readonly unit23Sections = unitTwentyThreeExerciseSections;
  readonly unit24Sections = unitTwentyFourExerciseSections;
  readonly unit25Sections = unitTwentyFiveExerciseSections;
  readonly unit26Sections = unitTwentySixExerciseSections;
  readonly availableUnits: UnitId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  get sections(): ExerciseSection[] {
    return {
      1: this.unit1Sections,
      2: this.unit2Sections,
      3: this.unit3Sections,
      4: this.unit4Sections,
      5: this.unit5Sections,
      6: this.unit6Sections,
      7: this.unit7Sections,
      8: this.unit8Sections,
      9: this.unit9Sections,
      10: this.unit10Sections,
      11: this.unit11Sections,
      12: this.unit12Sections,
      13: this.unit13Sections,
      14: this.unit14Sections,
      15: this.unit15Sections,
      16: this.unit16Sections,
      17: this.unit17Sections,
      18: this.unit18Sections,
      19: this.unit19Sections,
      20: this.unit20Sections,
      21: this.unit21Sections,
      22: this.unit22Sections,
      23: this.unit23Sections,
      24: this.unit24Sections,
      25: this.unit25Sections,
      26: this.unit26Sections
    }[this.currentUnit];
  }

  get currentSection(): ExerciseSection {
    return this.sections[this.currentSectionIndex];
  }

  // Fait le lien entre les exercices et les leçons correspondantes pour la navigation
  get currentLessonCategory(): LessonCategoryId {
    if (this.currentUnit === 1) return 'unit-overview';
    if (this.currentUnit === 3) return 'past-time';
    if (this.currentUnit === 5) return 'future-time';
    if (this.currentUnit === 7) return 'passives';
    if (this.currentUnit === 9) return 'unit-overview';
    if (this.currentUnit === 11) return 'unit-overview';
    if (this.currentUnit === 13) return 'unit-overview';
    if (this.currentUnit === 15) return 'unit-overview';
    if (this.currentUnit === 17) return 'unit-overview';
    if (this.currentUnit === 19) return 'unit-overview';
    if (this.currentUnit === 21) return 'unit-overview';
    if (this.currentUnit === 23) return 'unit-overview';
    if (this.currentUnit === 25) return 'unit-overview';

    if (this.currentUnit === 4) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 6) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'time-topic', B: 'time-topic', C: 'time-topic', D: 'work-topic', E: 'work-topic',
        F: 'time-work-phrasal', G: 'time-work-phrasal', H: 'time-work-phrasal',
        I: 'time-work-collocations', J: 'time-work-collocations', K: 'time-work-collocations',
        L: 'time-work-idioms', M: 'time-work-word-formation', N: 'time-work-word-formation', O: 'time-work-word-formation'
      };
      return categories[this.currentSection.id] ?? 'time-topic';
    }

    if (this.currentUnit === 8) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'movement-topic', B: 'movement-topic', C: 'movement-topic', D: 'transport-topic', E: 'transport-topic',
        F: 'movement-phrasal', G: 'movement-phrasal', H: 'movement-phrasal', I: 'movement-collocations', J: 'movement-collocations',
        K: 'movement-idioms', L: 'movement-word-formation', M: 'movement-word-formation', N: 'movement-word-formation', O: 'movement-word-formation'
      };
      return categories[this.currentSection.id] ?? 'movement-topic';
    }

    if (this.currentUnit === 10) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 12) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 14) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 16) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 18) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }

    if (this.currentUnit === 20) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }            

    if (this.currentUnit === 22) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }            

    if (this.currentUnit === 24) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }            

    if (this.currentUnit === 26) {
      const categories: Partial<Record<SectionId, LessonCategoryId>> = {
        A: 'change-topic', B: 'change-topic', C: 'change-topic',
        D: 'technology-topic', E: 'technology-topic',
        F: 'technology-phrasal', G: 'technology-phrasal', H: 'technology-phrasal',
        I: 'technology-collocations', J: 'technology-collocations', K: 'technology-collocations',
        L: 'technology-idioms', M: 'technology-word-formation', N: 'technology-word-formation'
      };
      return categories[this.currentSection.id] ?? 'change-topic';
    }            

    const categories: Partial<Record<SectionId, LessonCategoryId>> = {
      A: 'thinking', B: 'thinking', C: 'thinking', D: 'learning',
      E: 'phrasal-verbs', F: 'phrasal-verbs', G: 'phrasal-verbs',
      H: 'collocations', I: 'collocations', J: 'collocations', K: 'collocations',
      L: 'idioms', M: 'word-formation', N: 'word-formation', O: 'word-formation'
    };
    return categories[this.currentSection.id] ?? 'thinking';
  }

  get currentLessonCategoryTitle(): string {
    return {
      'unit-overview': 'Present time',
      'present-tenses': 'Present tenses',
      'present-perfect': 'Present perfect',
      'stative-verbs': 'Stative and non-stative verbs',
      'past-time': 'Past time',
      thinking: 'Topic Vocabulary : Thinking',
      learning: 'Topic Vocabulary : Learning',
      'phrasal-verbs': 'Phrasal verbs',
      collocations: 'Phrases, patterns and collocations',
      idioms: 'Idioms',
      'word-formation': 'Word formation'
      , 'change-topic': 'Topic Vocabulary : Change',
      'technology-topic': 'Topic Vocabulary : Technology',
      'technology-phrasal': 'Phrasal verbs',
      'technology-collocations': 'Phrases, patterns and collocations',
      'technology-idioms': 'Idioms',
      'technology-word-formation': 'Word formation'
      , 'future-time': 'Future time',
      'time-topic': 'Topic Vocabulary : Time',
      'work-topic': 'Topic Vocabulary : Work',
      'time-work-phrasal': 'Phrasal verbs',
      'time-work-collocations': 'Phrases, patterns and collocations',
      'time-work-idioms': 'Idioms',
      'time-work-word-formation': 'Word formation',
      passives: 'Passives and causatives',
      'movement-topic': 'Topic Vocabulary : Movement',
      'transport-topic': 'Topic Vocabulary : Transport',
      'movement-phrasal': 'Phrasal verbs',
      'movement-collocations': 'Phrases, patterns and collocations',
      'movement-idioms': 'Idioms',
      'movement-word-formation': 'Word formation'
    }[this.currentLessonCategory];
  }

  get currentLessonLink(): string[] {
    return ['/lesson', String(this.currentUnit)];
  }


  get reviewLink(): string[] {
    return ['/review', String(Math.ceil(this.currentUnit / 2))];
  }

  userAnswers: Record<string, string | undefined> = {};
  checkedSections: Record<string, boolean> = {};
  visibleCorrections: Record<string, boolean> = {};

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService
  ) {
    // On écoute à la fois le paramètre de route (:lessonId) et les éventuels queryParams (?section=A)
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(([params, queryParams]) => {
      const lessonIdParam = params.get('lessonId');
      const requestedSection = queryParams.get('section') as SectionId | null;

      const numericUnit = Number(lessonIdParam);
      if (!isNaN(numericUnit) && numericUnit >= 1 && numericUnit <= 26) {
        this.currentUnit = numericUnit as UnitId;
      } else {
        this.currentUnit = 1;
      }

      // Synchronisation avec la barre de navigation globale
      this.navService.currentLesson.set(this.currentUnit);
      this.navService.currentRubrique.set('exercises');

      // Sélection de la section (A par défaut, ou celle demandée dans ?section=...)
      const sectionIndex = requestedSection
        ? this.sections.findIndex(section => section.id === requestedSection)
        : 0;
      this.currentSectionIndex = sectionIndex >= 0 ? sectionIndex : 0;
    });
  }


  selectUnit(unit: UnitId) {
    if (this.currentUnit === unit) return;
    // Passe par le NavigationService pour mettre à jour l'URL (/exercises/X) et l'état global
    this.navService.setLesson(unit);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sectionStateKey(section: ExerciseSection): string {
    return `${section.unitId ?? 1}-${section.id}`;
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
      return gapIndex === 0 ? options as string[] : [];
    }
    return (options as string[][])[gapIndex] ?? [];
  }

  sectionScore(section: ExerciseSection): number {
    return section.questions.reduce((score, question) =>
      score + question.answers.filter((_, gapIndex) => this.isCorrect(section, question, gapIndex)).length, 0);
  }

  sectionGapCount(section: ExerciseSection): number {
    return section.questions.reduce((count, question) => count + question.answers.length, 0);
  }

  toggleCorrection(section: ExerciseSection) {
    const key = this.sectionStateKey(section);
    this.visibleCorrections[key] = !this.visibleCorrections[key];
  }

  private normalize(value: string): string {
    return value.trim().toLocaleLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');
  }
}