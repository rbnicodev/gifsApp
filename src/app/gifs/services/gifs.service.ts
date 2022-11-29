import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = 'dLq0RY1bpDo199Aw3e4FSpEcCpTghEq7';

  get history() {
    return [...this._history]
  }

  searchGifs ( query: string ) {

    query = query.trim().toLocaleLowerCase();

    if (query.trim().length === 0) return;
    if (this._history.includes(query)) return;
    
    this._history.unshift( query );

    if (this._history.length > 10) this._history.splice(0, 10);

    console.log(this._history);
  }
}
