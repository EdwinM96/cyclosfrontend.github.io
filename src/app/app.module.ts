import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MainIndexComponent } from './components/main-index/main-index.component';
import { CardRowComponent } from './components/card-row/card-row.component';
import { CircleRowComponent } from './components/circle-row/circle-row.component';
import { UpBtnComponent } from './components/up-btn/up-btn.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MainIndexComponent,
    CardRowComponent,
    CircleRowComponent,
    UpBtnComponent,
    MiddleSectionComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
