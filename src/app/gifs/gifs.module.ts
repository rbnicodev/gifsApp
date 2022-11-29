import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './search/search.component';
import { GifsGridComponent } from './gifs-grid/gifs-grid.component';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    GifsGridComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
