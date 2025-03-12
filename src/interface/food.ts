import { ICommonMeta } from './common';

export type IFood = {
  id: number;
  name: string;
  image: string;
  minCalories: number;
  maxCalories: number;
  description: string;
};

export type IFoodResponse = {
  data: IFood[];
  meta: ICommonMeta;
};
