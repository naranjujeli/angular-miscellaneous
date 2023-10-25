import { Component, OnInit, OnChanges, OnDestroy, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck {
  constructor() {
    console.log("constructor");
  }
  
  ngOnInit () {
    console.log("ngOnInit");
  }

  ngOnChanges () {
    console.log("ngOnChanges");
  }
  
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  
  ngAfterContentInit () {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked () {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit () {
    console.log("ngAfterViewInit");
  }
  
  ngAfterViewChecked () {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy () {
    console.log("ngOnDestroy");
  }
}
