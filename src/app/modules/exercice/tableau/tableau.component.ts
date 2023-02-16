import {Component} from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  personnes: Personne[] = [];
  insertNom: string = '';
  insertPrenom: string = '';
  insertAge: string = '';
  nbPersonnes: number = 0;

  ajouter() {
    if (this.insertNom && this.insertPrenom && this.insertAge) {
      let insertPersonne: Personne = {
        nom: this.insertNom,
        prenom: this.insertPrenom,
        age: parseInt(this.insertAge),
        id: this.nbPersonnes
      }

      this.nbPersonnes++;
      this.personnes.push(insertPersonne);
    }
  }

  supprimer(id: number) {
    this.personnes = this.personnes.filter(personne => personne.id !== id);
  }
}

export interface Personne {
  nom: string,
  prenom: string,
  age: number,
  id: number
}
