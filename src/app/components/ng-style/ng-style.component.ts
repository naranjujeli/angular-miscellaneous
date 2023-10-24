import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: 'ng-style.component.html',
  styles: []
})

export class NgStyleComponent implements OnInit {
  size: number;
  
  constructor() {
    this.size = 20;
  }
  
  aumentarTamanio() {
    console.log("hola");
    this.size++;
  }

  reducirTamanio() {
    this.size--;
  }
  
  ngOnInit() {
    
  }

}
