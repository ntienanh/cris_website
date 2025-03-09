import axiosClient from '@/helper/axiosClient';
import { AxiosResponse } from 'axios';

export const IngredientApi = {
  getAllIngredients: ({ pagination }: { pagination?: any }): Promise<AxiosResponse<IngredientResponse>> => {
    const condition = pagination ? `?page=${pagination.page}&pageSize=${pagination.pageSize}` : '';
    return axiosClient.get<IngredientResponse>(`/ingredient${condition}`);
  },
  createFood: ({ name }: { name: string }): Promise<AxiosResponse<any>> => {
    return axiosClient.post<IngredientResponse>('/ingredient', { name }); // Truyền `name` vào `data` thay vì `params`
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
