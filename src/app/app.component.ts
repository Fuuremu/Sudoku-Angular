import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sudoku-Angular';

  constructor(private router: Router) { }

  saisieJoueur() {
    this.router.navigate(['user']);
  }



  maVariable = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
res = [
  5,
  9,
  1,
  4,
  8,
  2,
  6,
  3,
  7
]
  verifNombre(nbr : any, id : number){
    if(nbr == this.res[id]){
      console.log('Correct !')
    }
    else{
      console.log('Incorrect !')
    }
  }
}
