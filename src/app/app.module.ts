
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// routing
import { TodoRoutingModule } from './todo-list/todo-routing.module';
import { AppRoutingModule } from './app.routing';

//services
import {YoutubePlayerService} from './youtube-player/youtube-player.service';
import { TodoListService } from './todo-list/todo-list.service';
// components
import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list/todo-list.component';

import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoDetailComponent } from './youtube-player/video-detail/video-detail.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TaskDashboardComponent } from './todo-list/task-dashboard/task-dashboard.component';
import { TaskListComponent } from './todo-list/task-list/task-list.component';
import { TodoListDetailComponent } from './todo-list/todo-list-detail/todo-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    VideoDetailComponent,
    CalculatorComponent,
    TaskDashboardComponent,
    TaskListComponent,
    TodoListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodoRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  ),

  ],
  providers: [ YoutubePlayerService, TodoListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
