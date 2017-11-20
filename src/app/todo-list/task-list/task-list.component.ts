import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import {TodoListService} from '../todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
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
     this.todoListService.getTodoList().subscribe(todolist => this.todolist = todolist);
   }
   gotoDetail(): void {
     this.router.navigate(['/DetailTask', this.selectTodo.id]);
   }
   add(name,place,time: string ) {
     name = name.trim();
     place = place.trim();
     time = time.trim();
     if (!name) { return; }
     if (!place) { return; }
     if (!time) { return; }
     this.todoListService.create({name,place,time} as Todo).subscribe(todo => this.todolist.push(todo));
     }

   deleteTodo(todo: Todo): void {
     this.todolist = this.todolist.filter(h => h !== todo);
     this.todoListService.delete(todo).subscribe;
   }

}
