import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  template: `
    <p>
      A este se le aplica la css rule
    </p>
  `,
  styles: [`
    p {
      font-family: 'Arial'
    }
  `]
})
export class InlineCssComponent {

}
