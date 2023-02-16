import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  valeurParent: string = 'Valeur initiale';

  messageEnfant: string = 'Aucun message reçu';

  affectValeur(valeur: string) {
    this.messageEnfant = valeur;
  }
}
