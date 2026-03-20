export type Subcategory = {
  idx: number;
  name: string;
  subcategories?: Subcategory[];
};

export type Category = {
  idx: number;
  name: string;
  subcategories?: Subcategory[];
};

export interface MenuProps {
  categories: Category[];
}

export interface SubMenuProps {
  categories: Category[];
  titleCategory: string;
}
