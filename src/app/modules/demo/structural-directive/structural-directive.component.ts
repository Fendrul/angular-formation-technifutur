import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {

  users : user[] = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 25},
    {name: 'Jim', age: 30},
    {name: 'Jack', age: 35},
    {name: 'Jill', age: 40}
  ]
  display: boolean = true;
  selector: number = 0;

  setDisplay() {
    this.display = !this.display;
  }
}

export interface user {
  name: string;
  age: number;
}
