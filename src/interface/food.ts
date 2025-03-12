import { ICommonMeta } from './common';

export type Food = {
  id: number;
  name: string;
};

export type FoodResponse = {
  data: Food[];
  meta: ICommonMeta;
};
