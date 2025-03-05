import axiosClient from '@/helper/axiosClient';
import { AxiosResponse } from 'axios';

export const IngredientApi = {
  getAllIngredients: (): Promise<AxiosResponse<IngredientResponse>> => {
    return axiosClient.get<IngredientResponse>(`/ingredient`);
  },
};

// TS
type Ingredient = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export interface IMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

type IngredientResponse = {
  data: Ingredient[];
  meta: IMeta;
};
