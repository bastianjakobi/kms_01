import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(public taskService: TaskService) {}
  name: string = '';
  description: string = '';
  priority: string = '';
  category: string = '';
  isdone: boolean = false;
  ngOnInit(): void {}
  handleSubmit() {
    this.taskService.addTask(
      this.name,
      this.description,
      this.priority,
      this.category,
      this.isdone,

    );
  }
}
