import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  public taskId: number;
  public name: string;
  public description: string;
  public priority: string;
  public category: string;
  editForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    priority: new FormControl(),
    category: new FormControl()
  });

  constructor(public taskService: TaskService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.taskId = this.taskService.taskId;
    for (const task of this.taskService.taskList) {
      if (task.id === this.taskId) {
        this.name = task.name;
        this.description = task.description;
        this.priority = task.priority;
        this.category = task.category;
      }
    }
    /*for (const task of this.taskService.doneList) {
      if (task.id === this.taskId) {
        this.name = task.name;
        this.description = task.description;
        this.priority = task.priority;
        this.category = task.category;
      }
    }
    this.editForm.setValue({
      name: this.name,
      decription: this.description,
      priority: this.priority,
      category: this.category
    });*/
  }

  editSubmit(): void {

  }
}
