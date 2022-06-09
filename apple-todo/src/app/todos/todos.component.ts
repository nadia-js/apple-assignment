import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todosCategories: any[] = [];
  selectedCategory: any = {};
  constructor(private todosService: TodosService) {
    this.todosCategories = todosService.getTodosCategories();
  }

  ngOnInit(): void {}

  setSelectedCategory(category: number) {
    this.selectedCategory = category;
  }
}
