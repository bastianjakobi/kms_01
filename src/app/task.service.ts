import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public show: boolean = false;
  public deletedTask: string;
  public taskList: Task[] = [];
  public doneList: Task[] = [];
  public searchedList: Task[] = [];
  public task: Task[] = [];
  public categories = [];
  constructor() {}

  addTask(
    name: string,
    description: string,
    priority: string,
    category: string,
    isdone: boolean
  ): any {
    let id = 1;
    let task = new Task(id, name, description, priority, category, isdone);
    this.taskList.push(task);
    this.task.push(task);
    id += 1;
    console.log(this.taskList);
  }

  addCategorie(category: Category): void {
    this.categories.push(category);
  }

  done(index: number): void {
    const doneTask = this.taskList[index];
    this.taskList.splice(index, 1);
    console.log(index);
    this.doneList.push(doneTask);
  }
  delete(index: number): void {
    const doneTask = this.taskList[index];
    this.taskList.splice(index, 1);
    this.deletedTask = doneTask.name;
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.deletedTask = '';
    }, 5000);
  }

  searchTasks(text: string): void {
    this.searchedList = [];
    if (text !== undefined && text !== '') {
      const searchText: string = text.toLocaleUpperCase();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.task.length; i++) {
        const taskToCheck: Task = this.task[i];
        if (taskToCheck.name !== undefined && taskToCheck.name.toLocaleUpperCase().includes(searchText)) {
          this.searchedList.push(taskToCheck);
        } else if (taskToCheck.category !== undefined && taskToCheck.category.toLocaleUpperCase().includes(searchText)) {
          this.searchedList.push(taskToCheck);
        } else if (taskToCheck.description !== undefined && taskToCheck.description.toLocaleUpperCase().includes(searchText)) {
          this.searchedList.push(taskToCheck);
        } else if (taskToCheck.priority !== undefined && taskToCheck.priority.toLocaleUpperCase().includes(searchText)) {
          this.searchedList.push(taskToCheck);
        }
      }
    }
  }



}
