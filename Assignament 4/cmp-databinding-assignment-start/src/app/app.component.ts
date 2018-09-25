import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];

  catchNumber(eventData: {time: number}) {
    eventData.time % 2 === 0 ? this.even.push(eventData.time) : this.odd.push(eventData.time);
  }
}
