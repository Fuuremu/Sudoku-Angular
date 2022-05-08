import { Injectable } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatriceService {

  matrice: string[][] = this.createMatrice();
  coordonnee!: number[][];
  solution: string[][] = [
    ['3','4', '9', '8', '1', '7', '5', '6', '2'],
    ['5', '8', '6', '4', '2','3', '9', '7', '1'],
    ['2', '1', '7', '5', '6', '9', '8', '4', '3'],
    ['8', '6', '1', '7', '3', '4', '2', '9', '5'],
    ['9', '2', '3', '1', '5', '6', '4', '8', '7'],
    ['7', '5', '4', '9', '8', '2', '3', '1', '6'],
    ['1', '7', '8', '2', '9', '5', '6', '3', '4'],
    ['6', '9', '5', '3', '4', '1', '7', '2', '8'],
    ['4', '3', '2', '6', '7', '8', '1', '5', '9']
  ];
  grille: string[][]= [];
  constructor() { }

  getcoordonnee() {
    return this.coordonnee;
  }

  getMatrice() {
    return this.matrice;
  }

  createMatrice() {
    this.matrice = [];
    for (let x = 0; x < 9; x++) {
      this.matrice[x] = new Array(9);
    }
    /*for (let x = 0; x < 9; x++) {
      this.matrice[x] = [];
      for (let y = 0; y < 9; y++) {
        const cardMore = document.getElementById(`card${x}-${y}`);
        this.addClass(cardMore, x, y);
      }
    }*/
    /*this.updateMatrice();*/
    return this.matrice;
  }

  genererGrille() {
    this.grille = []
    for (let x = 0; x < 9; x++) {
      this.grille[x] = new Array(9);
      for (let y = 0; y < 9; y++) {

        if (Math.random() < 0.50) {
          console.log("yolo");
          this.grille[x][y] = this.solution[x][y];
          this.ajoutAttibutClass(x,y);
        }
        

      }
    }
    console.log("grille", this.grille);
    console.log("solution", this.solution);
    return this.grille;
  }

  ajoutAttibutClass(x: number, y: number){
    const caseSudoku = document.getElementById(`case${x}-${y}`)
    if (caseSudoku) {
      console.log("GRAS")
      caseSudoku.setAttribute('readonly', 'true');
      caseSudoku.classList.add('gras');
    }
  }




  updateMatrice() {
    for (let x = 0; x < 9; x++) {
      this.matrice[x] = [];
      for (let y = 0; y < 9; y++) {
        const cardMore = document.getElementById(`card${x}-${y}`);
        this.addClass(cardMore, x, y);
      }
    }
  }

  addClass(cardMore: HTMLElement | null, x: number, y: number) {
    if (cardMore) {
      switch (x) {
        case 0:
          cardMore.classList.add("haut");
          break;
        case 2:
          cardMore.classList.add("bas");
          break;
        case 3:
          cardMore.classList.add("haut");
          break;
        case 5:
          cardMore.classList.add("bas");
          break;
        case 6:
          cardMore.classList.add('haut');
          break;
        case 8:
          cardMore.classList.add('bas');
          break;
        default:
          break;
      }
      switch (y) {
        case 0:
          cardMore.classList.add("gauche");
          break;
        case 2:
          cardMore.classList.add("droite");
          break;
        case 3:
          cardMore.classList.add("gauche");
          break;
        case 5:
          cardMore.classList.add("droite");
          break;
        case 6:
          cardMore.classList.add('gauche');
          break;
        case 8:
          cardMore.classList.add('droite');
          break;
        default:
          break;
      }
    }
  }
}
