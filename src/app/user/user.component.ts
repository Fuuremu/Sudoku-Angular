import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  myD!: string[];

  constructor() { };

  @Output()
  sendRequestToFather = new EventEmitter();

  onSubmit(form: NgForm) {
    this.myD = [form.value.username1, form.value.username2];
    this.sendRequestToFather.emit(this.myD);
  }
}
