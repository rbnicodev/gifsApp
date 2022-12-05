import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../gifs-grid/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = 'dLq0RY1bpDo199Aw3e4FSpEcCpTghEq7';
  private urlService: string = 'https://api.giphy.com/v1/gifs'
  private limit: number = 10;
  
  public results: Gif[] = [];

  get history() {
    return [...this._history]
  }

  constructor ( private http: HttpClient ) {
    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('data')!) || [];
  }

  searchGifs ( query: string ) {

    query = query.trim().toLocaleLowerCase();

    if (query.trim().length === 0) return;
    if (!this._history.includes(query)){
      this._history.unshift( query );
    }

    if (this._history.length > 10) this._history.splice(10);

    localStorage.setItem('historial', JSON.stringify(this._history));
    localStorage.setItem('data', JSON.stringify(this.results));


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit.toString() )
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.urlService }/search`, { params })
      .subscribe( out => {
        console.log( out.data );
        this.results = out.data;
      } );
  }
}
