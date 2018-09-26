import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  username = '';
  enable  = false;

  constructor() {}

  ngOnInit() {}

  isEmpty() {
    this.enable = this.username === '';
  }

  getEnable() {
    return this.enable;
  }

  onClickEvent() {
    this.username = '';
    this.isEmpty();
  }

  onTypeEvent() {
    this.isEmpty();
  }
}
