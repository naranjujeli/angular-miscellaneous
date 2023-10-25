import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent {
  n: number;

  constructor() {
    this.n = 1;
    this.varyNumber();
  }

  varyNumber() {
    setTimeout(() => {
      this.n++;
      if (this.n > 10) this.n = 1;
      this.varyNumber();
    }, 500);
  }
}
