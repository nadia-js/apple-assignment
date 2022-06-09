import { Component, OnInit } from '@angular/core';
import { ICategory } from '../model/todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  isAddButtonActive = false;
  value = '';
  todosCategories: ICategory[] = [];
  selectedCategory: ICategory;
  constructor(private todosService: TodosService) {
    this.todosCategories = this.todosService.getTodosCategories();
    this.selectedCategory = this.todosService.getTodosCategories()[0];
  }

  ngOnInit(): void {}

  setSelectedCategory(category: ICategory) {
    this.selectedCategory = category;
  }
  handleAddButton() {
    this.isAddButtonActive = !this.isAddButtonActive;
  }
  addCategory(label: string, type?: string) {
    const id = this.todosCategories.length + 1;
    // if type is not provided from input, use default value i.e. other
    type = type || 'other';
    this.todosCategories.push({ id, type, label, subCategories: [] });
    this.value = '';
  }
}
