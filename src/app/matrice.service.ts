import { Injectable } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatriceService {

  matrice: string[][] = this.createMatrice();
  solution: string[][] = [
    ['3', '4', '9', '8', '1', '7', '5', '6', '2'],
    ['5', '8', '6', '4', '2', '3', '9', '7', '1'],
    ['2', '1', '7', '5', '6', '9', '8', '4', '3'],
    ['8', '6', '1', '7', '3', '4', '2', '9', '5'],
    ['9', '2', '3', '1', '5', '6', '4', '8', '7'],
    ['7', '5', '4', '9', '8', '2', '3', '1', '6'],
    ['1', '7', '8', '2', '9', '5', '6', '3', '4'],
    ['6', '9', '5', '3', '4', '1', '7', '2', '8'],
    ['4', '3', '2', '6', '7', '8', '1', '5', '9']
  ];
  grille: string[][] = [];
  constructor() { }

  getMatrice() {
    return this.matrice;
  }
  getGrille(x: number, y: number) {
    return this.grille[x][y];
  }
  createMatrice() {
    this.matrice = [];
    for (let x = 0; x < 9; x++) {
      this.matrice[x] = new Array(9);
    }
    return this.matrice;
  }

  genererGrille() {
    this.grille = []
    for (let x = 0; x < 9; x++) {
      this.grille[x] = new Array(9);
      for (let y = 0; y < 9; y++) {
        if (Math.random() < 0.45) {
          this.grille[x][y] = this.solution[x][y];
        }
      }
    }
    return this.grille;
  }

}
