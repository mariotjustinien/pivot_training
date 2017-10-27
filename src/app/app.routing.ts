
import { Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { CalculatorComponent } from './calculator/calculator.component';

// Definition of routes
export const appRoutes: Routes = [
  {
    path : 'todolist',
    component: TodoListComponent  // TODO : use appropriated page
  },
  {
    path : 'player',
    component: YoutubePlayerComponent // TODO : use appropriated page
  },
  {
    path : 'calculator',
    component: CalculatorComponent // TODO : use appropriated page
  },
  {
    path     : '**',
    redirectTo: '',
  }

];
