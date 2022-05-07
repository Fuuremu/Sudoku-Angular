import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  subscribeTimer: any;
  timeLeft: number = 0;
  constructor() { }
  ngOnInit(): void {
    this.startTimer();
  }
  startTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val);
      this.subscribeTimer = this.timeLeft + val;
    });
  }
  
  // <p (click)="observableTimer()">Start Observable timer</p> {{subscribeTimer}}
}
