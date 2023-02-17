import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _baseUrl = 'http://localhost:3000/categorie'
  public cat$ = new BehaviorSubject<Categorie[]>([])
  constructor(private _http:HttpClient) { }

  findAll(): Observable<Categorie[]>{
    return this._http
      .get<Categorie[]>(this._baseUrl)
      .pipe(
      
        tap(cats => this.cat$.next(cats)),
        
      );
  }
}
