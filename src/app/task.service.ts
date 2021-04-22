import { Injectable } from '@angular/core';
import {Task} from '../model/Task';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public task: Task[];
  public categories: Category[];
  constructor() { }

  addTask(name:string, description: string, priority: string, category: string, isdone: boolean): any {

  }

  addCategorie(category: Category): void {
    this.categories.push(category);
  }
}
