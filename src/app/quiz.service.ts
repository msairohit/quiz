import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  Quizzes: Quiz[] = [
    {
      question: 'Answer for this question is A',
      answer: [
        { option: 'some', correct: true },
        { option: 'thing', correct: false },
        { option: 'else', correct: false },
        { option: 'is', correct: false }
      ]
    }, 
    {
      question: 'Answer for this question is B',
      answer: [
        { option: 'apple', correct: false },
        { option: 'mango', correct: true },
        { option: 'orange', correct: false },
        { option: 'grapes', correct: false }
      ]
    }, 
    {
      question: 'Answer for this question is C',
      answer: [
        { option: 'hyderabad', correct: false },
        { option: 'delhi', correct: false },
        { option: 'mumbai', correct: true },
        { option: 'chennai', correct: false }
      ]
    }
  ]
  constructor() { }

  getQuizzes () {
    return this.Quizzes;
  }
}
