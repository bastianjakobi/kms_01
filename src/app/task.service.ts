import { Injectable } from '@angular/core';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public task: Task[];
  constructor() { }

  addTask(name:string, description: string, priority: string, category: string, isdone: boolean): any {

  }
}
