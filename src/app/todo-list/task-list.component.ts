import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';
import {TodoListService} from './todo-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  // providers: [ TodoListService]
})
export class TaskListComponent implements OnInit {
  todolist: Todo[];
  selectTodo: Todo;

  onSelect(todo: Todo): void {
    this.selectTodo = todo;
  }

  constructor(
    private todoListService: TodoListService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTodolist();
  }
  getTodolist(): void {
    this.todoListService.getTodoList().then(todolist => this.todolist = todolist);
  }
  gotoDetail(): void {
    this.router.navigate(['/DetailTask', this.selectTodo.id]);
  }
  add(name: string, place: string, time: string ) {
    name = name.trim();
    place = place.trim();
    time = time.trim();
    if (!name) { return; }
    if (!place) { return; }
    if (!time) { return; }
    this.todoListService.create(name, time , place)
        .then(todo => {
          this.todolist.push(todo);
          this.selectTodo = null;
        });
    }
  deleteTodo(todo: Todo): void {
    this.todoListService
      .delete(todo.id)
      .then(() => {
        this.todolist = this.todolist.filter(h => h !== todo);
        if (this.selectTodo === todo) { this.selectTodo = null; }
      });
  }
}
