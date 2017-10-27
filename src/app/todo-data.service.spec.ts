import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'Hello 1', complete: false});
        let todo2 = new Todo({title: 'Hello 2', complete: true});

        service.addTodo(todo1);
        service.addTodo(todo2);

        expect(service.getTodoById(1)).toEqual(todo1);
        expect(service.getTodoById(2)).toEqual(todo2);
      }));
  });

  describe('#getAllTodos()', () => {
    it('should return an empty array by default',
      inject([TodoDataService], (service: TodoDataService) => {
        expect(service.getAllTodos()).toEqual([]);
      }));

    it('should return all todos',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'Hello 1', complete: false});
        let todo2 = new Todo({title: 'Hello 2', complete: true});

        service.addTodo(todo1);
        service.addTodo(todo2);

        expect(service.getAllTodos()).toEqual([todo1, todo2]);
      }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should remove todo with the corresponding id',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo1 = new Todo({title: 'Hello 1', complete: false});
        let todo2 = new Todo({title: 'Hello 2', complete: true});

        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1, todo2]);

        service.deleteTodoById(1);
        expect(service.getAllTodos()).toEqual([todo2]);

        service.deleteTodoById(2);
        expect(service.getAllTodos()).toEqual([]);
      })
    );
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with the corresponding id and updated data',
      inject([TodoDataService], (service: TodoDataService) => {
        let todo = new Todo({title: 'Hello 1', complete: false});

        service.addTodo(todo);

        let updatedTodo = service.updateTodoById(1, {
          title: 'new Title'
        });

        expect(updatedTodo.title).toEqual('new Title');
        }));

      it('should return null if todo is not found',
        inject([TodoDataService], (service: TodoDataService) => {
          let todo = new Todo({title: 'Hello 1', complete: false});

          service.addTodo(todo);

          let updateTodo = service.updateTodoById(12, {
            title: 'new title'
          });

          expect(updateTodo).toEqual(null);
        }));
  });
});
