import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this._userService.users$;
 
  @Output() userSelected = new EventEmitter<User>() 
constructor(private _userService :UsersService){}



  ngOnInit(): void {
    this._userService.findAll().subscribe();
  }
  
}
