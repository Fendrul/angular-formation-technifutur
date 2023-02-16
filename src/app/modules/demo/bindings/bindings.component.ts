import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  maVariable: number = 5;

  attributeBinding = false;

  clickAddToCounter() {
    this.maVariable++;
  }

  invertOpen() {
    this.attributeBinding = !this.attributeBinding;
  }
}
