import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos$: BehaviorSubject<Todo[]> = this._todoService.todos$
  toCreate: Todo = {};
  catSelected!: Categorie
  
  constructor(private _todoService: TodoService) {}
    
  ngOnInit() {
   this._todoService.findAll().subscribe();
   
  }

  changeStateOfTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.editOne(todo, todo.id).subscribe();
  }

  createTodo() {
    if (this.toCreate.text) {
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