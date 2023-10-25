import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input("appHighlight") bgColor: string;

  constructor(private el: ElementRef) {
    console.log("HighlightDirective was called");
    this.bgColor = "transparent";
  }
  
  @HostListener("mouseenter") mouseEnter() {
    this.el.nativeElement.style.backgroundColor= this.bgColor;
  }

  @HostListener("mouseleave") mouseLeave() {
    this.el.nativeElement.style.backgroundColor= "transparent";
  }

}
