import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { AppRoutingModule } from 'app-routing.module';
import { FormsModule } from '@angular/forms';
import { CatComponent } from './components/cat/cat.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UsersComponent,
    CatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
