import { Component, OnInit } from '@angular/core';
import { MatriceService } from '../matrice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { joueur } from '../joueur';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {
  matrice: string[][] = this.matriceService.getMatrice();
  coordMine!: number[][];
  partieEnCours: boolean = false;
  joueur1!: joueur;
  joueur2!: joueur;
  var: Boolean = true;
  partie1Jouee: Boolean = false;
  partieFinie: Boolean = false;
  erreurs: number[]=[0,0];
  messageFin!:string;

  //Timer
  temps: number = 0;
  timeLeft: number = 0;

  constructor(public matriceService: MatriceService,
    private route: ActivatedRoute) { }

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
  /*grille: number[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];*/
  ngOnInit(): void {
    //this.startGame();
    


  }

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
    if(this.joueur1.getScoreJoueur() < this.joueur2.getScoreJoueur())
    {
      this.messageFin = "Le joueur " + this.joueur1.getNomJoueur() + "a gagné !"
    }
    else{
      this.messageFin = "Le joueur " + this.joueur2.getNomJoueur() + "a gagné !"
    }

  }

  startTimer() {
    this.temps=0;
    const source = timer(1000, 2000);
    source.subscribe(val => {
      console.log(val);
      this.temps++;
    });
  }

  sendData(value: string) {
    this.joueur1 = new joueur(value[0]);
    this.joueur2 = new joueur(value[1]);
    this.joueur1.setScoreJoueur(0);
    this.joueur2.setScoreJoueur(0);
    this.partieEnCours = true;

    console.log(this.joueur1.getNomJoueur());
    this.startGame();
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
      if (this.partie1Jouee == false) {
        this.joueur1.setScoreJoueur(this.temps + this.erreurs[0]*60);
        this.restartGame();
        
      }
      else {
        
        this.joueur2.setScoreJoueur(this.temps + this.erreurs[1]*60);
        this.endGame();
      }
      //if joueur 1 -> Restart game
      //if joueur 2 -> Fin game
    }
    else {
      console.log('c\'est pas bon askip')
    }
  }



  verifNombre(x: number, y: number, nbr: string) {
    console.log(this.matriceService.grille, this.solution);

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
        caseSudoku.classList.add('erreur');
      }
      //Ajout classe erreur (affichage en rouge)
      if (this.partie1Jouee)
      {
        this.erreurs[0]++;
      }
      else{
        this.erreurs[1]++;
      }
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

    //
    //let cx = x % 3;
    let dx = Math.trunc(x / 3);

    //
    //let cy = y % 3;
    let dy = Math.trunc(y / 3);

    // x et y reconstués
    //let coX = cx + (dx * 3);
    //let coY = cy + (dy * 3);
    /*console.log("cx", cx);
    console.log("cy", cy);
    console.log("dx", dx);
    console.log("dy", dy);
    console.log("cx+(dx*3)", cx + (dx * 3));
    console.log("cy+(dy*3)", cy + (dy * 3));
    console.log("this.grille[coX][coY]", this.matriceService.grille[coX][coY]);*/
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        /*console.log(dx * 3 + i, dy * 3 + j)
        console.log("valeur grille", this.matriceService.grille[dx * 3 + i][dy * 3 + j])*/
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
