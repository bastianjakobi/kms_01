import { TestBed } from '@angular/core/testing';
import { Task } from 'src/model/Task';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should delete tasks', () => {
    service.taskList.push(new Task('Test 1', 'Test 1 Description', 'High', '', false),
      new Task('Test 2', 'Test 2 Description', 'High', '', false));
    expect(service.taskList.length).toBe( 2 );
    expect(service.delete(0)).toBeTrue();
    expect(service.taskList.length).toBe(1);
    expect(service.delete(2)).toBeFalse();
    expect(service.taskList.length).toBe(1);
  });
});
