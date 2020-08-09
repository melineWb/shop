import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  defaultHiglightColor = '#fff';
  @Input('appHighlight') highlightColor: string;

  constructor(public el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || this.defaultHiglightColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void{
    this.el.nativeElement.style.backgroundColor = color;
  }
}
