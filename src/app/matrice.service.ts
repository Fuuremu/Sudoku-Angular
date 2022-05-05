import { Injectable } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatriceService {

  matrice: number[][] = this.createMatrice();
  coordonnee!: number[][];
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





 
  

  updateMatrice() {
    for (let x = 0; x < 9; x++) {
      this.matrice[x] = [];
      for (let y = 0; y < 9; y++) {
        const cardMore = document.getElementById(`card${x}-${y}`);
        this.addClass(cardMore, x, y);
      }
  }}

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
