import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class TodoListService {
 private todolistURl= 'api/todolist';
 todolist: Observable<Todo[]> ;
 private dataStore: {
      todolist: Todo[]
  }

 constructor (private http: Http) {
   this.dataStore = { todolist: []};
 }
 private headers = new Headers({'Content-Type': 'application/json'});

  getTodoList(): Promise<Todo[]> {
    return this.http.get(this.todolistURl)
      .toPromise()
      .then(response => response.json().data as Todo[])
      .catch(this.handleError);
  } // stub

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTodoListSlowly(): Promise<Todo[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTodoList()), 2000);
    });
  }
  getTodo(id: number): Promise<Todo> {

   const url = `${this.todolistURl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Todo)
      .catch(this.handleError);

  }

  update(todo: Todo): Promise<Todo> {
    const url = `${this.todolistURl}/${todo.id}`;
    return this.http
      .put(url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(() => todo)
      .catch(this.handleError);
  }
  create(name: string, time: string, place: string): Promise<Todo> {
    return this.http
      .post(this.todolistURl, JSON.stringify({name: name, time: time, place : place} ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.todolistURl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}

