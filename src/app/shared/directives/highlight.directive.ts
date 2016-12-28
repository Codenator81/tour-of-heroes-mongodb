import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    el.nativeElement.style.color = '#000';
    el.nativeElement.style.padding = '20px';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
