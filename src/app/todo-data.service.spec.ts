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

        expect(1).toEqual(todo1.id);
        expect(2).toEqual(todo2.id);
      }));
  });
});
