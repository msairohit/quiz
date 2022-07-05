import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';
import { CountdownClockComponent } from './timer/countdown-clock/countdown-clock.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BackgroundDirective,
    CountdownClockComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
