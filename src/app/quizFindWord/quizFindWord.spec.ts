import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFindWord } from './quizFindWord';

describe('Quiz1', () => {
  let component: QuizFindWord;
  let fixture: ComponentFixture<QuizFindWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFindWord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFindWord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
