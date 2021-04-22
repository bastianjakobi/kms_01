import { Injectable } from '@angular/core';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Task[] = [];
  public doneList: Task[] = [];
  constructor() { }

  addTask(name: string, description: string, priority: string, category: string, isdone: boolean): any {
      let id = 1;
      let task = new Task(id, name, description, priority, category, isdone);
      this.taskList.push(task);
      id += 1;
      console.log(this.taskList);
  }

  done(index: number): void {
    const doneTask = this.taskList[index];
    this.taskList.splice(index, 1);
    console.log(index);
    this.doneList.push(doneTask);
  }

}

