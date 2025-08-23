export type CategoriesResponse = {
  categories: CategoryDto[];
};
export type CategoryDto = {
  created_at: Date;
  id: number;
  is_active: boolean;
  name: string;
  updated_at: null;
};
