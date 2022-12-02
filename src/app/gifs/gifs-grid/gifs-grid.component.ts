import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.css']
})
export class GifsGridComponent {

  constructor( private gifsService: GifsService ) {

  }

  get outData() {
    return this.gifsService.results;
  }

}
