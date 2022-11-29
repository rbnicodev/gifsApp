import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('sSearch') sSearch!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {} 

  search() {
    const value = this.sSearch.nativeElement.value;
    this.gifsService.searchGifs( value );
    this.sSearch.nativeElement.value = '';
  }

}
