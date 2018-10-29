import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isClick = false;
  logs = [];
  constructor() {}

  clicked() {
    this.isClick = true;
    this.logs.push(new Date().toLocaleString());
  }

  isClicked() {
    return this.isClick;
  }

}
