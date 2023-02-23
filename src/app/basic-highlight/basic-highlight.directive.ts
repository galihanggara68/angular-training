import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: '[appBasicHightlight]' })
export class BasicHightlightDirective implements OnInit {
  constructor(private elemRef: ElementRef) {}

  ngOnInit(): void {
    this.elemRef.nativeElement.style.backgroundColor = 'red';
  }
}
