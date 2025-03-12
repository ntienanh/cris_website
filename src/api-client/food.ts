import axiosClient from '@/helper/axiosClient';
import { FoodResponse } from '@/interface/food';
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
