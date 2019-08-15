import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morningstar-etf',
  templateUrl: './morningstar-etf.component.html'
})
export class MorningstarEtfComponent implements OnInit {
  list = [];

  constructor() { }

  ngOnInit() {
    this.list = [
      {title: 'SlideX 1'},
      {title: 'SlideX 2'},
      {title: 'SlideX 3'},
      {title: 'SlideX 4'},
      {title: 'SlideX 5'},
      {title: 'SlideX 6'},
      {title: 'SlideX 7'},
      {title: 'SlideX 8'},
      {title: 'SlideX 9'},
      {title: 'SlideX 10'},
      {title: 'SlideX 11'},
      {title: 'SlideX 12'},
      {title: 'SlideX 13'},
      {title: 'SlideX 14'},
      {title: 'SlideX 15'},
      {title: 'SlideX 16'},
    ];
  }

}
