import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFindDefinition } from './quizFindDefinition';

describe('Quiz', () => {
  let component: QuizFindDefinition;
  let fixture: ComponentFixture<QuizFindDefinition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFindDefinition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFindDefinition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
