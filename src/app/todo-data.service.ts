import { Injectable } from '@angular/core';
import { Todo } from './todo';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;

    // Placeholder for todo's
    todos: Todo[] = [];

    constructor(private api: ApiService) { }

    // Simulate POST /todos
    addTodo(todo: Todo): Observable<Todo> {
      return this.api.createTodo(todo);
    }

    // Simulate GET /todos/:id
    getTodoById(todoId: number): Observable<Todo> {
      return this.api.getTodoById(todoId);
    }

    // Simulate GET /todos
    getAllTodos(): Observable<Todo[]> {
      return this.api.getAllTodos();
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(todoId: number): Observable<Todo> {
      return this.api.deleteTodoById(todoId);
    }

    // Simulate PUT /todos/:id
    updateTodoById(todo: Todo): Observable<Todo> {
      return this.api.updateTodo(todo);
    }

    // Toggle todo complete
    // toggleTodoComplete(id: number): Todo {
    //   let todo = this.getTodoById(id);

    //   if (!todo) {
    //     return null;
    //   }

    //   todo = this.updateTodoById(todo.id, {
    //     complete: !todo.complete
    //   });

    //   return todo;
    // }
    toggleTodoComplete(todo: Todo) {
      todo.complete = !todo.complete;
      return this.api.updateTodo(todo);
    }
}
