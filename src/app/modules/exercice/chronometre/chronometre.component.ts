import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})


export class ChronometreComponent implements OnInit, OnDestroy, OnChanges {

  time: number = 0;
  timer: any;
  enabled: boolean = false;

  ngOnInit(): void {
    console.log('created')
  }

  ngOnDestroy(): void {
    console.log('destroyed')
  }

  ngOnChanges(): void {
    console.log('changed')
  }

  start() {
    if (!this.enabled){
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
      this.enabled = true;
    }
  }

  pause() {
    clearInterval(this.timer);
  }

  reset() {
    this.time = 0;
    clearInterval(this.timer);
    this.enabled = false;
  }
}
