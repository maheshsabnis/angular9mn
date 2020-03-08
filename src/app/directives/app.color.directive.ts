import {Directive, Input, HostListener, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector:'[setColor]'
})
export class ColorDirective {
  // ElementRef and Renderer2 will be resolved by BrowserModule
  constructor(
    private ele: ElementRef, private renderer: Renderer2
  ){}

  // define a public Input member that will map to the Directive's selector
  @Input('setColor') setColor: string;

  // business logic method
  private applyColor(color: string): void {
      this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', color);
  }

  // define methods to link with events to activate and deactivate directive
  @HostListener('mouseenter') //<--- actual event that will be trapped
  omMouseenter(): void{
      this.applyColor(this.setColor);
  }

  @HostListener('mouseleave') //<--- actual event that will be trapped
  omMouseleave(): void{
      this.applyColor(null);
  }
}
