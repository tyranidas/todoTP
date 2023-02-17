import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: BehaviorSubject<User[]> = this._userService.users$;
  userSelected: string ="";
constructor(private _userService :UsersService){}

  ngOnInit(): void {
    this._userService.findAll().subscribe();
  }

}
