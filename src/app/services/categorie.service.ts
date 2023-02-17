import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Todo } from '../models/todo';

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

  createOne(cat: Categorie){

    console.log("coucou")
    return this._http
    .post<Categorie>(this._baseUrl, cat)
    .pipe(
//      tap(()=> console.log("truc")),
      tap(cat => this.cat$.value.push(cat))
    );
  }


 testCat(toCreate:Todo){
    let compt=0
    this.cat$.value.forEach(cat =>{
      if(cat.intitule != toCreate.cat && compt==0){
        compt++
        let newCat:Categorie = {id : this.cat$.value.length+1, intitule: toCreate.cat  }
        console.log(newCat.id, newCat.intitule, compt)
        this.createOne(newCat).subscribe(()=> toCreate.cat="")
      }
    })
 }
}