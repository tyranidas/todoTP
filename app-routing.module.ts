import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/components/todos/todos.component';
import { UsersComponent } from 'src/app/components/users/users.component';

const routes: Routes = [
 
  {path: 'home', component: TodosComponent},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodosComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :
  [RouterModule]
})
export class AppRoutingModule { }
