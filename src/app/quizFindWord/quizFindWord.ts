import { Component, signal, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuizService, MultipleChoiceWord } from '../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizFindWord.html',
  styleUrls: ['./quizFindWord.scss']
})
export class QuizFindWord implements OnInit {
  question = signal<MultipleChoiceWord | null>(null);
  selectedAnswer = signal<string | null>(null);
  userAnswer = signal<string | null>(null);
  score = signal(0);
  showHint = signal(false);
  correctAnswerToShow = signal<string | null>(null);
  feedbackMessage = signal<string | null>(null);

  totalQuestions = 10;
  currentIndex = 0;

  @ViewChild('answerInput') answerInputRef!: ElementRef<HTMLInputElement>;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadNextQuestion();
    this.feedbackMessage.set(null); 
   }

  ngAfterViewInit() {
    this.focusInput();
  }


  loadNextQuestion() {
    if (this.currentIndex >= this.totalQuestions) {
      this.question.set(null); // quiz finished
      return;
    }

    this.quizService.getNextQuestionFindWord().subscribe({
      next: (q) => { 
        this.question.set(q);          // la bonne réponse est fournie par le back
        this.selectedAnswer.set(null);
        this.showHint.set(false); // réinitialiser l’indice
        this.currentIndex++;
        console.log(q);
      },
      error: (err) => console.error('Erreur API:', err),
    });
  }

  selectAnswer(choice: string) {
    const q = this.question();
    if (!q) return;

    const correct = choice === q.word;

    this.selectedAnswer.set(choice);

    if (correct) {
      this.score.update(s => s + 1);
      this.correctAnswerToShow.set(null); // pas besoin d’afficher
    } else {
      this.correctAnswerToShow.set(q.word); // montrer la bonne réponse
    }

    this.quizService.sendAnswer(q.id, correct).subscribe();

    const delay = correct ? 1000 : 2000;

    setTimeout(() => {
      this.loadNextQuestion();
    }, delay);
  }


  validateTypedAnswer() {

    const choice = (this.userAnswer() || '').trim().toLowerCase();

    const q = this.question();
    if (!q) return;

    const correct = choice === q.word;

    this.selectedAnswer.set(choice);

    if (correct) {
      this.score.update(s => s + 1);
      this.correctAnswerToShow.set(null); // pas besoin d’afficher
    } else {
      this.correctAnswerToShow.set(q.word); // montrer la bonne réponse
    }

    this.quizService.sendAnswer(q.id, correct).subscribe();

    const delay = correct ? 1000 : 3000;

    this.userAnswer.set(null);
      // focus automatique
      setTimeout(() => this.focusInput(), 0);
    setTimeout(() => {
      this.loadNextQuestion();
    }, delay);

  }

   focusInput() {
    this.answerInputRef?.nativeElement?.focus();
  }

  isCorrect(): boolean | null {
    const answer = this.selectedAnswer();
    const q = this.question();
    if (!answer || !q) return null;
    return answer === q.word;
  }

  progress(): number {
    return Math.round(((this.currentIndex-1) / this.totalQuestions) * 100);
  }

  restartQuiz() {
    this.score.set(0);
    this.currentIndex = 0;
    this.loadNextQuestion();
  }

}