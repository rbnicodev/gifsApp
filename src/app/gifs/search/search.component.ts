import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('sSearch') sSearch!: ElementRef<HTMLInputElement>;

  search() {
    const value = this.sSearch.nativeElement.value;
    this.sSearch.nativeElement.value = '';
    console.log(value);
  }

}
