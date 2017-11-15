import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // providers: [ TodoListService]

})

export class TodoListComponent {
  title = 'Todo list';
}
