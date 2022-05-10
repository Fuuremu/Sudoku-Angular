export class joueur{
    private nomJoueur!: string;
    private scoreJoueur = 0;

    constructor(nom: string){
        this.nomJoueur = nom;
    }

    getNomJoueur(): string{
        return this.nomJoueur;
    }

    getScoreJoueur(): number{
        return this.scoreJoueur;
    }

    setNomJoueur(name: string){
        this.nomJoueur = name;
    }

    setScoreJoueur(score: number){
        this.scoreJoueur = score;
    }

}