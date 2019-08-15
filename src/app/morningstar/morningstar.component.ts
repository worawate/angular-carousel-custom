import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morningstar',
  templateUrl: './morningstar.component.html'
})
export class MorningstarComponent implements OnInit {
  list = [];
  constructor() { }

  ngOnInit() {
    this.list = [
      {title: 'Slide 1'},
      {title: 'Slide 2'},
      {title: 'Slide 3'},
      {title: 'Slide 4'},
      {title: 'Slide 5'},
      {title: 'Slide 6'},
      {title: 'Slide 7'},
      {title: 'Slide 8'},
      {title: 'Slide 9'},
      {title: 'Slide 10'},
      {title: 'Slide 11'},
      {title: 'Slide 12'},
      {title: 'Slide 13'},
      {title: 'Slide 14'},
      {title: 'Slide 15'},
      {title: 'Slide 16'},
    ];
  }
}
