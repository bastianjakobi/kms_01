import { Injectable } from '@angular/core';
import {Task} from '../model/Task';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskList: Task[] = [];
  public doneList: Task[] = [];
  public task: Task[];
  public categories: Category[];
  constructor() { }

  addTask(name: string, description: string, priority: string, category: string, isdone: boolean): any {
      let id = 1;
      let task = new Task(id, name, description, priority, category, isdone);
      this.taskList.push(task);
      id += 1;
      console.log(this.taskList);
  }
  addCategorie(category: Category): void {
    this.categories.push(category);
  }
}
