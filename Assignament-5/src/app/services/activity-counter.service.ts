import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ActivityCounterService {
  counter = 0;

  movements() {
    this.counter ++;
    console.log(this.counter);
  }
}
