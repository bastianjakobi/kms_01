import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/Category';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  taskService: TaskService;
  category: string;

  constructor(taskService: TaskService) { }

  ngOnInit(): void {
  }

  addCategory(): void  {
    const category: Category = new Category(this.category);
    this.taskService.addCategorie(category);
  }
}
