import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';
import * as $ from 'jquery';

@Component({
  selector: 'app-countdown-clock',
  templateUrl: './countdown-clock.component.html',
  styleUrls: ['./countdown-clock.component.scss']
})
export class CountdownClockComponent implements OnInit {

  // https://codepen.io/suez/pen/dXbBGp
  constructor() { }

  ngOnInit(): void {

/*     setInterval(() => {
      this.secondPlay();
    }, 1000);


    setInterval(() => {
      this.minutePlay();
    }, 10000); */


  }
  minutePlay() {
    $("body").removeClass("play");
    var aa = $("ul.minutePlay li.active");

    if (aa.html() == undefined) {
      aa = $("ul.minutePlay li").eq(0);
      aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

    }
    else if (aa.is(":last-child")) {
      $("ul.minutePlay li").removeClass("before");
      aa.addClass("before").removeClass("active");
      aa = $("ul.minutePlay li").eq(0);
      aa.addClass("active")
        .closest("body")
        .addClass("play");
    }
    else {
      $("ul.minutePlay li").removeClass("before");
      aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
    }

  }

  secondPlay() {
    console.log("second");
    $("body").removeClass("play");
    var aa = $("ul.secondPlay li.active");

    if (aa.html() == undefined) {
      aa = $("ul.secondPlay li").eq(0);
      aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

    }
    else if (aa.is(":last-child")) {
      $("ul.secondPlay li").removeClass("before");
      aa.addClass("before").removeClass("active");
      aa = $("ul.secondPlay li").eq(0);
      aa.addClass("active")
        .closest("body")
        .addClass("play");
    }
    else {
      $("ul.secondPlay li").removeClass("before");
      aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
    }


  }


}
