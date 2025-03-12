import { ICommonMeta } from './common';

export type Ingredient = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type IngredientResponse = {
  data: Ingredient[];
  meta: ICommonMeta;
};
