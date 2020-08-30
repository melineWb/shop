import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeColor]'
})
export class MakeColorDirective {
  defaultColor = '#b71c1c';
  @Input('appMakeColor') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(): void {
    const isColorExist = !!this.elRef.nativeElement.style.color;
    return isColorExist ? this.resetColor() : this.makeColor(this.color || this.defaultColor);
  }

  private makeColor(color): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }

  private resetColor(): void {
    this.renderer.removeStyle(this.elRef.nativeElement, 'color');
  }
}
