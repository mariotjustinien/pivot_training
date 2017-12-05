import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../todo-list.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  todolist: Todo[] ;
  constructor (private todolistService: TodoListService) { }

  ngOnInit(): void {
    this.getTodoList();
  }
  getTodoList(): void {
   this.todolistService.getTodoList().subscribe(todolist => this.todolist = todolist.slice(1.2));
  }
}
