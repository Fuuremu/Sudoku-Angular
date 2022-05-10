import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent   {
  myD!: string[];

  constructor(private router: Router){};

  @Output()
  sendRequestToFather = new EventEmitter();

  afficherJeu() {
    this.router.navigate(['jeu']);
  }

  onSubmit(form: NgForm) {
    this.myD = [form.value.username1, form.value.username2];
    this.sendRequestToFather.emit(this.myD);
  }
}
