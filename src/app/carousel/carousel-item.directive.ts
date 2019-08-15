import { Directive, TemplateRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]',
})
export class CarouselItemDirective implements AfterViewInit {
  constructor(public tpl: TemplateRef<any>) {}

  ngAfterViewInit() {
    //console.log('test');
  }
}
