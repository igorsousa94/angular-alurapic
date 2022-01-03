import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[apDarkerOnhover]'
})
export class DarkerOnHoverDirective {

  @Input() brightness = '70%';

  constructor(
    private el: ElementRef,
    private render: Renderer
  ){}

  @HostListener('mouseover')
  darkerOn(){
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkerOff(){
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
