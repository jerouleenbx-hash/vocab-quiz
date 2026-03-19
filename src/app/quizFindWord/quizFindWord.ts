import { Component, signal, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuizService, MultipleChoiceWord } from '../services/quiz.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizFindWord.html',
  styleUrls: ['./quizFindWord.scss']
})
export class QuizFindWord implements OnInit {
  questions = signal<MultipleChoiceWord[]>([]);
  currentQuestion = signal<MultipleChoiceWord | null>(null);
  selectedAnswer = signal<string | null>(null);
  userAnswer = signal<string | null>(null);
  score = signal(0);
  showHint = signal(false);
  correctAnswerToShow = signal<string | null>(null);
  feedbackMessage = signal<string | null>(null);

  totalQuestions = 5;
  currentIndex = signal<number>(0);
  difficulty: string = 'A1';
  tag: string = "Basic words";
  userId: number = 1; // À adapter selon ton système d'authentification

  @ViewChild('answerInput') answerInputRef!: ElementRef<HTMLInputElement>;

  constructor(private quizService: QuizService, private globalService: GlobalService, private route: ActivatedRoute) {}

  ngOnInit() {
        this.difficulty = this.globalService.currentLevel;
        this.tag = this.globalService.currentTag;
        this.restartQuiz();
  }  

  ngAfterViewInit() {
    this.focusInput();
  }


  loadQuestions() {
    this.quizService.getQuizWord(this.difficulty, this.tag, this.userId).subscribe({
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

    const correct = choice === q.word;

    this.selectedAnswer.set(choice);

    if (correct) {
      this.score.update(s => s + 1);
      this.correctAnswerToShow.set(null); // pas besoin d’afficher
    } else {
      this.correctAnswerToShow.set(q.word); // montrer la bonne réponse
    }

    this.quizService.sendAnswer(q.id, correct ? 1 : -1).subscribe();

    const delay = correct ? 1000 : 2000;

    setTimeout(() => {
      this.currentIndex.set(this.currentIndex()+1);
      this.loadCurrentQuestion();
    }, delay);
  }


  validateTypedAnswer() {

    const choice = (this.userAnswer() || '').trim().toLowerCase();

    const q = this.currentQuestion();
    if (!q) return;

    const correct = choice === q.word;

    this.selectedAnswer.set(choice);

    if (correct) {
      this.score.update(s => s + 1);
      this.correctAnswerToShow.set(null); // pas besoin d’afficher
    } else {
      this.correctAnswerToShow.set(q.word); // montrer la bonne réponse
    }

    this.quizService.sendAnswer(q.id, correct ? 3 : -1).subscribe();

    const delay = correct ? 1000 : 3000;

    this.userAnswer.set(null);
      // focus automatique
      setTimeout(() => this.focusInput(), 0);

      setTimeout(() => {
      this.currentIndex.set(this.currentIndex()+1);
      this.loadCurrentQuestion();
    }, delay);

  }

  focusInput() {
    this.answerInputRef?.nativeElement?.focus();
  }

  isCorrect(): boolean | null {
    const answer = this.selectedAnswer();
    const q = this.currentQuestion();
    if (!answer || !q) return null;
    return answer === q.word;
  }

  progress(): number {
    return Math.round(((this.currentIndex()-1) / this.totalQuestions) * 100);
  }

  restartQuiz() {
    this.score.set(0);
    this.loadQuestions();
  }

}