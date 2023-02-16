import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-directive',
  templateUrl: './component-directive.component.html',
  styleUrls: ['./component-directive.component.scss']
})
export class ComponentDirectiveComponent implements OnInit {

  ngOnInit() {
    this.setStyle();
  }

  discoModEnabled: boolean = false;
  isBold: boolean = false;
  isItalic: boolean = false;
  currentStyle: any;

  setStyle() {
    this.currentStyle = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal'
    }
  }

  setBold() {
    this.isBold = !this.isBold;
    this.setStyle();
  }

  setItalic() {
    this.isItalic = !this.isItalic;
    this.setStyle();
  }

  setDiscoMod() {
    this.discoModEnabled = !this.discoModEnabled;
  }
}
