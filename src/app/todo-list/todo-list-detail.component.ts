import { Component , Input, OnInit} from '@angular/core';
import { Todo } from './todo';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {TodoListService} from './todo-list.service';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-todo-list-detail',
  templateUrl: './todo-list-detail.component.html'
})
export class TodoListDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor (
    private todolistService: TodoListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.todolistService.getTodo(+params.get('id')))
    .subscribe(todo => this.todo = todo);
    }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.todolistService.update(this.todo)
      .then(() => this.goBack());
  }

  deleteTodo(todo: Todo): void {
    // this.todoListService
    //   .delete(todo.id)
    //   .then(() => {
    //     this.todolist = this.todolist.filter(h => h !== todo);
    //     if (this.selectTodo === todo) { this.selectTodo = null; }
    //   });
  }

}
