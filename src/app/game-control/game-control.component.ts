import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  ref;
  @Output() counterStatus = new EventEmitter<{count: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.ref = setInterval(() => {
      this.count++;
      this.counterStatus.emit({count: this.count});
      console.log(this.count);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.ref);
    this.count = 0;
  }

}
