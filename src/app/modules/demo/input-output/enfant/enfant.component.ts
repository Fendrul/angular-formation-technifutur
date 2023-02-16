import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input()
  valeurEnfant!: string;

  @Output()
  monEvent: EventEmitter<string> = new EventEmitter<string>();

  emettreBonjour() {
    this.monEvent.emit('Bonjour');
  }

}
