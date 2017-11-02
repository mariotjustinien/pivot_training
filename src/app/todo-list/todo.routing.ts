import { Routes } from '@angular/router';

import {TaskDashboardComponent} from './task-dashboard.component';
import {TodoListDetailComponent} from './todo-list-detail.component';
import {TaskListComponent} from './task-list.component';

export const todoRoutes: Routes = [
{
  path : 'TaskDashboard',
    component: TaskDashboardComponent // TODO : use appropriated page

},
{
  path: 'DetailTask/:id',
    component: TodoListDetailComponent
},
{
  path: 'TaskList',
    component: TaskListComponent
},
  {
    path : '',
    redirectTo: '/TaskDashboard',
    pathMatch: 'full',
  }

]

