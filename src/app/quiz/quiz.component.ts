import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // https://www.youtube.com/watch?v=l5u4t7QEUJk

  quizzes: Quiz[] = [];
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  currenctQuestion = 0;
  displayResults: boolean = false;


  order = [];
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();

    this.order = Array.from(Array(this.quizzes.length).keys());
    this.shuffle(this.order);
    console.log(this.order);
  }

  init() {
    this.quizzes = this.quizService.getQuizzes();
    this.answerSelected = false;

    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.currenctQuestion = 0;
    this.displayResults = false;
    this.ngOnInit();

  }

  onAnswer(option: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      this.currenctQuestion++;
      this.answerSelected = false;
    }, 1000);

    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
  }

  showResults() {
    this.displayResults = true;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
