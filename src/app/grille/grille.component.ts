import { Component } from '@angular/core';
import { MatriceService } from '../matrice.service';
import { joueur } from '../joueur';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent {
  matrice: string[][] = this.matriceService.getMatrice();
  coordMine!: number[][];
  partieEnCours: boolean = false;
  joueur1!: joueur;
  joueur2!: joueur;
  var: Boolean = true;
  partie1Jouee: Boolean = false;
  partieFinie: Boolean = false;
  erreurs: number[] = [0, 0];
  messageFin!: string;
  interval!: any;


  //Timer
  temps: number = 0;
  timeLeft: number = 0;
  minutes: number = 0;
  constructor(public matriceService: MatriceService) { }

  startGame() {
    this.matriceService.grille = this.matriceService.genererGrille();
    this.startTimer()
  }
  restartGame() {
    this.matriceService.grille = this.matriceService.genererGrille();
    this.partie1Jouee = true;
    this.temps = 0
  }
  endGame() {
    this.partieFinie = true;
    if (this.joueur1.getScoreJoueur() < this.joueur2.getScoreJoueur()) {
      this.messageFin = "Le joueur " + this.joueur1.getNomJoueur() + " a gagné !"
    }
    else {
      this.messageFin = "Le joueur " + this.joueur2.getNomJoueur() + " a gagné !"
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.temps++;
      this.minutes = Math.trunc(this.temps / 60);
    }, 1000)
  }

  sendData(value: string) {
    this.joueur1 = new joueur(value[0]);
    this.joueur2 = new joueur(value[1]);
    this.joueur1.setScoreJoueur(0);
    this.joueur2.setScoreJoueur(0);
    this.partieEnCours = true;

    this.startGame();
  }
  recommencer() {
    location.reload();
  }
  getGrille(x: number, y: number) {
    return this.matriceService.getGrille(x, y);
  }

  verifSolution() {
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (this.matriceService.grille[x][y] != this.matriceService.solution[x][y]) {
          this.var = false;
        }
      }
    }

    if (this.var) {
      console.log("fini !");
      //if joueur 1 -> Restart game
      if (this.partie1Jouee == false) {
        this.joueur1.setScoreJoueur(this.temps + this.erreurs[0] * 60);
        this.restartGame();
      }
      //if joueur 2 -> Fin game
      else {
        this.joueur2.setScoreJoueur(this.temps + this.erreurs[1] * 60);
        this.endGame();
      }
    }
    else {
      console.log('c\'est pas bon askip')
    }
  }

  verifNombre(x: number, y: number, nbr: string) {

    //Test ligne
    let testligne: boolean = this.verifLigne(x, y, nbr);
    //Test colonne
    let testcolonne: boolean = this.verifColonne(x, y, nbr);
    //Test case
    let testCase: boolean = this.verifCase(x, y, nbr);


    if (!(testligne && testcolonne && testCase)) {
      console.log("erreur");
      let caseSudoku = document.getElementById(`case${x}-${y}`)
      if (caseSudoku) {
        //Ajout classe erreur (affichage en rouge)
        caseSudoku.classList.add('erreur');
      }

      if (this.partie1Jouee) {
        this.erreurs[0]++;
      }
      else {
        this.erreurs[1]++;
      }
      alert("Il y a la même chiffre dans " + (testligne ? '' : 'la ligne, ') + (testcolonne ? '' : 'la colonne, ') + (testCase ? '' : 'la case'));
    }
    else {
      let caseSudoku = document.getElementById(`case${x}-${y}`)
      if (caseSudoku) {
        if (caseSudoku.classList.contains('erreur')) {
          caseSudoku.classList.remove('erreur');
        }
      }
    }
  }

  verifLigne(x: number, y: number, nbr: string) {
    let retour = true;
    for (let i = 0; i < 9; i++) {
      //y 
      if (this.matriceService.grille[x][i] == nbr) {
        if (i != y) {
          retour = false;
          console.log("erreur ligne")
        }
      }
    }
    return retour;
  }

  verifColonne(x: number, y: number, nbr: string) {
    let retour = true;
    for (let i = 0; i < 9; i++) {
      //y 
      if (this.matriceService.grille[i][y] == nbr) {
        if (i != x) {
          retour = false;
          console.log("erreur colonne")
        }
      }
    }
    return retour;
  }

  verifCase(x: number, y: number, nbr: string) {
    let retour = true;

    //x
    let dx = Math.trunc(x / 3);

    //y
    let dy = Math.trunc(y / 3);

    // x et y reconstués
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {

        let cosX = dx * 3 + i;
        let cosY = dy * 3 + j;

        if (this.matriceService.grille[cosX][cosY] == nbr) {
          if (cosX != x && cosY != y) {
            retour = false;
            console.log("erreur case")
          }
        }
      }
    }
    return retour;
  }

}
