import { TODO } from './mock-todo';
import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo list';
  todolist = TODO;
  selectTodo: Todo;

  onSelect(todo: Todo): void {
    this.selectTodo = todo;
  }

  constructor() { }

  ngOnInit() {
  }

}
