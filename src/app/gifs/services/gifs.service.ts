import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  get history() {
    return [...this._history]
  }

  searchGifs ( query: string ) {
    if (query.length > 0) this._history.unshift( query );
    if (this._history.length > 10) this._history.pop();
    console.log(this._history);
  }
}
