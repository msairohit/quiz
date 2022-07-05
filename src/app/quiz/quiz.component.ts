import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
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

  // https://www.npmjs.com/package/ngx-countdown
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  config = {
    leftTime : 10,
    demand: true,
    format: 'ss'
  };

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
      this.countdown.restart();
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

  startGame() {
    this.config.leftTime= 10;
    this.countdown.begin();
  }
  handleEvent(data) {
    console.log(data);
    if(this.currenctQuestion >= this.quizzes.length) {
      //hide timer.
      this.countdown.stop();
      
    }
    if(data.action == 'done') {
      console.log("change to next question.");
      this.currenctQuestion++;
      this.incorrectAnswers++;
      // this.config.leftTime= 10;
      this.countdown.restart();
    }
    if(data.action == 'restart') {
      this.countdown.begin();
    }
  }

}
