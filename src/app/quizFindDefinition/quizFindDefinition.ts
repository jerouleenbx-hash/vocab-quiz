import { Component, signal, OnInit } from '@angular/core';
import { QuizService, MultipleChoiceWord } from '../services/quiz.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { NavigationService } from '../services/navigation.service';

type QuizResult = {
  questionId: number;
  word: string;
  userAnswer: string | null;
  correctAnswer: string;
  correct: boolean;
};


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizFindDefinition.html',
  styleUrls: ['../quizFindWord/quizFindWord.scss']
})
export class QuizFindDefinition implements OnInit {
  questions = signal<MultipleChoiceWord[]>([]);
  currentQuestion = signal<MultipleChoiceWord | null>(null);
  selectedAnswer = signal<string | null>(null);
  score = signal(0);
  showHint = signal(false);
  correctAnswerToShow = signal<string | null>(null);
  results = signal<QuizResult[]>([]);
  totalQuestions = 8;
  currentIndex = signal<number>(0);
  tag: string = 'Unit 02';
  userId: number = 1; // À adapter selon ton système d'authentification

  constructor(
    private quizService: QuizService,
    private globalService: GlobalService,
    private navService: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const lessonId = params.get('lessonId') || '1';
      
      // Synchronisation de la barre de navigation globale
      const numericId = Number(lessonId);
      if (!isNaN(numericId)) {
        this.navService.currentLesson.set(numericId);
      }
      this.navService.currentRubrique.set('quiz-definition');

      // Conversion en "Unit XX" et relance du quiz
      this.tag = this.getUnitTag(lessonId);
      this.restartQuiz();
    });
  }

  getUnitTag(lessonId: number | string): string {
    const num = Number(lessonId) || 1;
    // Arrondit au nombre pair supérieur (1->2, 2->2, 3->4, 4->4... 25->26, 26->26)
    const unitNumber = Math.ceil(num / 2) * 2;
    
    // Ajoute un '0' devant si le nombre a moins de 2 chiffres (ex: 2 -> "02")
    return `Unit ${unitNumber.toString().padStart(2, '0')}`;
  }

  loadQuestions() {
    this.quizService.getQuizDefinition(
      this.tag
    ).subscribe({
      next: (qs) => {
        this.questions.set(qs);
        this.currentIndex.set(0);
        this.loadCurrentQuestion();
      },
      error: (err) => console.error('Erreur API:', err),
    });
  }

  loadCurrentQuestion() {
    if (this.currentIndex() >= this.totalQuestions) {
      this.currentQuestion.set(null); // quiz terminé
      return;
    }

    this.currentQuestion.set(this.questions()[this.currentIndex()]);
    this.selectedAnswer.set(null);
    this.showHint.set(false);
    this.correctAnswerToShow.set(null);
  }

  selectAnswer(choice: string) {
    const q = this.currentQuestion();
    if (!q) return;

    const correct = choice === q.definition;

    this.selectedAnswer.set(choice);

    if (correct) {
      this.score.update(s => s + 1);
      this.correctAnswerToShow.set(null);
    } else {
      this.correctAnswerToShow.set(q.definition);
    }

    this.results.update(list => [
      ...list,
      {
        questionId: q.id,
        word: q.word,
        userAnswer: choice,
        correctAnswer: q.definition,
        correct
      }
    ]);

    const delay = correct ? 1000 : 2000;

    setTimeout(() => {
      this.currentIndex.set(this.currentIndex() + 1);
      this.loadCurrentQuestion();
    }, delay);
  }

  isCorrect(): boolean | null {
    const answer = this.selectedAnswer();
    const q = this.currentQuestion();
    if (!answer || !q) return null;
    return answer === q.definition;
  }

  progress(): number {
    return Math.round(((this.currentIndex()) / this.totalQuestions) * 100);
  }

  restartQuiz() {
    this.score.set(0);
    this.results.set([]);
    this.loadQuestions();
  }
}
