import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  externalCounter = 0;
  oddArr: Array<number> = [];
  evenArr: Array<number> = [];

  onCounterChange(counter: {count: number}) {
    this.externalCounter = counter.count;
    if (this.externalCounter % 2 === 0) {
      this.oddArr.push(this.externalCounter);
    } else {
      this.evenArr.push(this.externalCounter);
    }
  }
}
