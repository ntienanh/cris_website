import axiosClient from '@/helper/axiosClient';
import { IngredientResponse } from '@/interface/ingredient';
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
