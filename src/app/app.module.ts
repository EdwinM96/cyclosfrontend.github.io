import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { CardRowComponent } from './components/card-row/card-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MainIndexComponent,
    CardRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
