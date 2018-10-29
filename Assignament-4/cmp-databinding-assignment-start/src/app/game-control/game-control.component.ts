import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onStart = new EventEmitter<{time: number}>();
  time = 0;
  ref;
  constructor() { }

  startPressed() {
    this.ref = setInterval(this.onStartPressed.bind(this), 1000, self);
  }

  private onStartPressed() {
    this.time++;
    this.onStart.emit({time: this.time});
  }

  stopPressed() {
    clearInterval(this.ref);
  }

  ngOnInit() {
  }

}
