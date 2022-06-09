import { Injectable } from '@angular/core';
import { ICategory, ISubCategory } from './model/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // hardcoding categories instead getting from backend

  todos_categories: ICategory[] = [
    {
      id: 1,
      label: 'grocerries',
      subCategories: [
        { id: 1, label: 'fruit' },
        { id: 1, label: 'dairy' },
      ],
      type: 'food',
    },
    {
      id: 1,
      label: 'tools',
      subCategories: [
        { id: 1, label: 'hammer' },
        { id: 1, label: 'screw driver' },
      ],
      type: 'device',
    },
    {
      id: 1,
      label: 'misc',
      subCategories: [],
      type: 'other',
    },
    {
      id: 1,
      label: 'plan for today',
      subCategories: [
        { id: 1, label: 'shopping' },
        { id: 1, label: 'pick up kids from school' },
      ],

      type: 'planning',
    },
  ];
  constructor() {}

  getTodosCategories(): ICategory[] {
    return this.todos_categories;
  }
}
