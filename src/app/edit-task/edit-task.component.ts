import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(public taskService: TaskService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
