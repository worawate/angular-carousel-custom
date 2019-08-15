import { Component, 
        OnInit, 
        ContentChildren, 
        QueryList, 
        ViewChildren, 
        ElementRef, 
        ViewChild, 
        Input, 
        AfterViewInit, 
        SimpleChanges, 
        OnChanges } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemElementDirective } from './carousel-item-element.directive';
import { AnimationPlayer, AnimationBuilder, AnimationFactory, animate, style } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;

  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  private noOfSlide = 8;

  carouselWrapperStyle = {};
  disabledButtonNext = false;
  disabledButtonPrev = false;

  constructor(private builder: AnimationBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.reSizeCarousel();
  }

  reSizeCarousel() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    const wrapperWidth = this.itemWidth * this.noOfSlide;
    this.carouselWrapperStyle = {
      width: wrapperWidth + 'px'
    };

    console.log(wrapperWidth);
    //this.transitionCarousel(null);
  }

  next() {
    this.disabledButtonNext = (this.currentSlide + this.noOfSlide) >= this.items.length;

    if (!this.disabledButtonNext) {
      this.currentSlide = (this.currentSlide + this.noOfSlide) % this.items.length;
      this.transitionCarousel(null);
    }

  }

  prev() {
    this.disabledButtonPrev = (this.currentSlide - this.noOfSlide) < 0;

    if (!this.disabledButtonPrev) {
      this.currentSlide = (this.currentSlide - this.noOfSlide + this.items.length) % this.items.length;
      this.transitionCarousel(null);
    }
  }

  transitionCarousel(time: any) {
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset, time: any) {
    return this.builder.build([
      animate(time == null ? this.timing : 0, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

}
