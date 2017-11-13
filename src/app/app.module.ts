
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// routing
import { appRoutes } from './app.routing';
import {todoRoutes} from './todo-list/todo.routing';
// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { TodoListDetailComponent } from './todo-list/todo-list-detail.component';
import {TodoListService} from './todo-list/todo-list.service';
import {TaskDashboardComponent} from './todo-list/task-dashboard.component';
import {TaskListComponent} from './todo-list/task-list.component';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    TodoListDetailComponent,
    TaskDashboardComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(todoRoutes),
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
