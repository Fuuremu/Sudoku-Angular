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
  constructor(private matriceService: MatriceService) { }

  solution: number[][] = [
    [6, 4, 9, 8, 1, 7, 5, 6, 2],
    [5, 8, 6, 4, 2, 3, 9, 7, 1],
    [2, 1, 7, 5, 6, 9, 8, 4, 3],
    [8, 6, 1, 7, 3, 4, 2, 9, 5],
    [9, 2, 3, 1, 5, 6, 4, 8, 7],
    [1, 7, 8, 2, 9, 5, 6, 3, 4],
    [6, 9, 5, 3, 4, 1, 7, 2, 8],
    [4, 3, 2, 6, 7, 8, 1, 5, 9]
  ];
  grille: number[][] = [
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
    this.startGame();
  }

  startGame() {

  }

  verifNombre(x: number, y: number, nbr: number) {
    //Si la grille est complète
    if (this.grille == this.solution) {
      console.log("fini !");
      //if joueur 1 -> Restart game
      //if joueur 2 -> Fin game
    }
    //Si la grille n'est pas complète
    else {
      //Test ligne
      let testligne: boolean = this.verifLigne(x, y, nbr);
      //Test colonne
      let testcolonne: boolean = this.verifColonne(x, y, nbr);
      //Test case
      let testCase: boolean = this.verifCase(x, y, nbr);


      if (!testligne || !testcolonne || !testCase) {
        console.log("erreur");
        //Ajout classe erreur (affichage en rouge)
      }
      /*if (nbr == this.solution[x][y]) {
        console.log("Correct !")
      }
      else {
        console.log("Incorrect !")
      }*/
    }



  }

  verifLigne(x: number, y: number, nbr: number) {
    let retour = true;
    for (let i = 0; i < 9; i++) {
      //y 
      if (this.grille[x][i] == nbr) {
        if (i != y) {
          retour = false
        }
      }
    }
    return retour;
  }
  verifColonne(x: number, y: number, nbr: number) {
    let retour = true;
    for (let i = 0; i < 9; i++) {
      //y 
      if (this.grille[i][y] == nbr) {
        if (i != x) {
          retour = false
        }
      }
    }
    return retour;
  }
  verifCase(x: number, y: number, nbr: number) {
    let retour = true;

    //
    let cx = x % 3;
    let dx = Math.trunc(x / 3);

    //
    let cy = y % 3;
    let dy = Math.trunc(y / 3);

    // x et y reconstués
    let coX = cx + (dx * 3);
    let coY = cy + (dy * 3);
    console.log("cx", cx);
    console.log("cy", cy);
    console.log("dx", dx);
    console.log("dy", dy);
    console.log("cx+(dx*3)", cx + (dx * 3));
    console.log("cy+(dy*3)", cy + (dy * 3));
    console.log("this.grille[coX][coY]", this.grille[coX][coY]);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(dx * 3 + i, dy * 3 + j)
        if (this.grille[dx * 3 + i][dy * 3 + j] == nbr) {
          if (dx * 3 + i != y || dy * 3 + j != x) {
            retour = false
          }
        }
      }
    }





    return retour;
  }

}
