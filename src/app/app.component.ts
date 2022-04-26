import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sudoku-Angular';
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
