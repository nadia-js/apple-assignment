import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ADD_NEW_CATEGORY,
  ADD_NEW_SUB_CATEGORY,
  SUB_CATEGORY_NOT_FOUND,
} from '../constants/common.constants';
import { ICategory, ICategoryTypes } from '../model/todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  isAddCategoryButtonActive = false;
  isAddSubCategoryButtonActive = false;
  categoryValue = '';
  subCategoryValue = '';
  todosCategories: ICategory[] = [];
  selectedCategory: ICategory;
  // static display contents
  sub_category_not_found = SUB_CATEGORY_NOT_FOUND;
  add_new_category = ADD_NEW_SUB_CATEGORY;
  add_new_sub_category = ADD_NEW_CATEGORY;

  constructor(private todosService: TodosService) {
    this.todosCategories = this.todosService.getTodosCategories();
    this.selectedCategory = this.todosService.getTodosCategories()[0];
  }

  ngOnInit(): void {}

  setSelectedCategory(category: ICategory) {
    this.selectedCategory = category;
  }
  handleAddButton(type: ICategoryTypes) {
    if (type === 'category') {
      this.isAddCategoryButtonActive = !this.isAddCategoryButtonActive;
    } else if (type === 'subCategory') {
      this.isAddSubCategoryButtonActive = !this.isAddSubCategoryButtonActive;
    } else {
      // do nothing
    }
  }
  addCategory(label: string, type?: string): void {
    const id = this.todosCategories.length + 1;
    // if type is not provided from input, use default value i.e. other
    type = type || 'other';
    this.todosCategories.push({ id, type, label, subCategories: [] });
    this.categoryValue = '';
  }

  addSubCategory(label: string, type?: string): void {
    const existingSubCategories = this.selectedCategory?.subCategories || [];
    const id = existingSubCategories?.length + 1;
    // if type is not provided from input, use default value i.e. other
    type = type || 'other';
    existingSubCategories.push({ id, label });
    this.selectedCategory['subCategories'] = existingSubCategories;
    this.subCategoryValue = '';
  }

  removeSubCategory(subCategoryIndex: number) {
    // remove only one specific sub category item by item position
    this.selectedCategory['subCategories'].splice(subCategoryIndex, 1);
  }

  checkSubCategory(isCheckedVal: boolean, index: number) {
    const existingSubCategories = this.selectedCategory?.subCategories || [];
    existingSubCategories[index].isSelected = isCheckedVal;
  }
  // component clean up
  ngOnDestroy(): void {
    this.todosCategories = [];
  }
}
