import { Injectable } from '@angular/core';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Task[];
  constructor() { }

  addTask(name: string, description: string, priority: string, category: string, isdone: boolean): any {
    for (const task of this.taskList){
      let id = 1;
      let task = new Task(id, name, description, priority, category, isdone);
      this.taskList.push(task);
      id += 1;
      console.log(this.taskList);
    }
  }
}
