import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes.component',
  templateUrl: './pipes.component.component.html',
  styleUrls: ['./pipes.component.component.scss']
})
export class PipesComponentComponent {
  title : string = "ce sont des pipes";

  celsius : number = 20;
}
