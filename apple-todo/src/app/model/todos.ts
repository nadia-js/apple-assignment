export interface ICategory {
  id: number;
  label: string;
  type: string;
  subCategories: ISubCategory[];
  expiredAt?: Date;
}
export interface ISubCategory {
  id: number;
  label: string;
  isSelected?: boolean;
}

export type ICategoryTypes = 'category' | 'subCategory';
