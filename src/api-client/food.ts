import axiosClient from '@/helper/axiosClient';
import { AxiosResponse } from 'axios';

export const FoodApi = {
  getAllFood: ({ pagination }: { pagination?: any }): Promise<AxiosResponse<FoodResponse>> => {
    const condition = pagination ? `?page=${pagination.page}&pageSize=${pagination.pageSize}` : '';
    return axiosClient.get<FoodResponse>(`/food${condition}`);
  },
  createFood: ({ name }: { name: string }): Promise<AxiosResponse<FoodResponse>> => {
    return axiosClient.post<FoodResponse>('/food', { name }); // Truyền `name` vào `data` thay vì `params`
  },
};

// TS
type Food = {
  id: number;
  name: string;
};

export interface IMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type FoodResponse = {
  data: Food[];
  meta: IMeta;
};
