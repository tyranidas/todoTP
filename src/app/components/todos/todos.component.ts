import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { CategorieService } from 'src/app/services/categorie.service';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos$: BehaviorSubject<Todo[]> = this._todoService.todos$
  cats$ :  BehaviorSubject<Categorie[]> = this._catService.cat$
  toCreate: Todo = {};
  catSelected: Categorie = {intitule:"toutes"}
  userSelected:User = {id:0}
  
  constructor(
    private _todoService: TodoService,
    private _catService: CategorieService
    
    ) {}
    
  ngOnInit() {
   this._todoService.findAll().subscribe()
}
  

  changeStateOfTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.editOne(todo, todo.id).subscribe();
  }

  createTodo() {
    if (this.toCreate.text) {
      this.toCreate.userId=this.userSelected.id
      this._catService.testCat(this.toCreate)
      
      this._todoService
        .createOne(this.toCreate)
        .subscribe(() => {
          this.toCreate.text = '';
        });
    }
  }
 

  
  editTodo(todo: Todo) {
    todo.isEditable = !todo.isEditable;
    if (!todo.isEditable) {
      this._catService.testCat(todo)
      this._todoService
        .editOne(todo, todo.id)
        .subscribe();
        };
    
  }

  onDelete(todo: Todo) {
    if (todo.id) {
      this._todoService
      .deleteOne(todo)
      .subscribe();
    }
  }
}