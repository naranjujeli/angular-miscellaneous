import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `
    <div>
      <p [ngClass]="color">
        Este señor debería cambiar de color
      </p>
      <button (click)="switchToRed()" [ngClass]="'red'">Lo quiero rojo</button>
      <button (click)="switchToGreen()" [ngClass]="'green'">Lo quiero verde</button>
    </div>
  `,
  styles: [`
    div {
      width: 100%;
    }

    .red {
      background-color: #FDD;
    }

    .green {
      background-color: #DFD;
    }
  `]
})
export class NgClassComponent {
  color: string;

  constructor() {
    this.color = "red";
  }

  switchToRed() {
    this.color = "red";
  }

  switchToGreen() {
    this.color = "green";
  }
}
