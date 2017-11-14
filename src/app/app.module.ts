
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './youtube-player/in-memory-data.service';

// routing
import { appRoutes } from './app.routing';
import {todoRoutes} from './todo-list/todo.routing';

// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { VideoDetailComponent } from './youtube-player/video-detail.component';
import { TodoListDetailComponent } from './todo-list/todo-list-detail.component';
import { TaskDashboardComponent} from './todo-list/task-dashboard.component';
import { TaskListComponent} from './todo-list/task-list.component';
import { HttpModule } from '@angular/http';
import { CalculatorComponent } from './calculator/calculator.component';

// service
import { TodoListService } from './todo-list/todo-list.service';
import { YoutubePlayerService } from './youtube-player/youtube-player.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    YoutubePlayerComponent,
    VideoDetailComponent,
    TodoListDetailComponent,
    TaskDashboardComponent,
    TaskListComponent,

    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  providers: [TodoListService, YoutubePlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
