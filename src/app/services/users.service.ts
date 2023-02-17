import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _baseUrl = 'http://localhost:3000/users'

  public users$ = new BehaviorSubject<User[]>([])
  
  constructor(private _http:HttpClient) { }

  findAll(): Observable<User[]>{
    return this._http
      .get<User[]>(this._baseUrl)
      .pipe(
      
        tap(users => this.users$.next(users)),
       
      );
  }

}
