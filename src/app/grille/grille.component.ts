import { Component, OnInit } from '@angular/core';
import { MatriceService } from '../matrice.service';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {
  matrice: number[][] = this.matriceService.getMatrice();
  coordMine!: number[][];
  constructor(private matriceService: MatriceService) {}

  solution:number[][] = [
    [6,4,9,8,1,7,5,6,2],
    [5,8,6,4,2,3,9,7,1],
    [2,1,7,5,6,9,8,4,3],
    [8,6,1,7,3,4,2,9,5],
    [9,2,3,1,5,6,4,8,7],
    [1,7,8,2,9,5,6,3,4],
    [6,9,5,3,4,1,7,2,8],
    [4,3,2,6,7,8,1,5,9]
  ];
  grille:number[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  ngOnInit(): void {
  }
  verifNombre(x:number, y:number, nbr:number){
    if(nbr == this.solution[x][y])
    {
      console.log("Correct !")
    }
    else
    {
      console.log("Incorrect !")
    }


  }
}
