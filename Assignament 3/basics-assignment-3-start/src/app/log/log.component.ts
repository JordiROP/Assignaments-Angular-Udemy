import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})

export class LogComponent implements OnInit {
  nlog: string = '';
  ilog: number  = 0;
  constructor() {
    this.nlog = new Date().toLocaleString();
    this.ilog ++;
    console.log(this.ilog);
  }

  getBackgroundColor() {
    return 'blue';
  }

  setColor() {
    return this.ilog === 1;
  }

  ngOnInit() {
  }

}
