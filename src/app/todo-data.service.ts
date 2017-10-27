import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;

    // Placeholder for todo's
    todos: Todo[] = [];

    constructor() { }

    // Simulate POST /todos
    addTodo(todo: Todo): TodoDataService {
      if (!todo.id) {
        todo.id = ++this.lastId;
      }
      this.todos.push(todo);
      return this;
    }

    // Simulate GET /todos/:id
    getTodoById(id: number): Todo {
      return this.todos
              .filter(todo => todo.id === id)
              .pop();
    }
}
