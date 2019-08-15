import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
 
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MorningstarComponent } from './morningstar/morningstar.component';
import { MorningstarEtfComponent } from './morningstar-etf/morningstar-etf.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { CarouselItemDirective } from './carousel/carousel-item.directive';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatIconModule  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MorningstarComponent, 
    MorningstarEtfComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    MorningstarEtfComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
