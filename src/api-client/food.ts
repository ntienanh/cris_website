import axiosClient from '@/helper/axiosClient';
import { AxiosResponse } from 'axios';

export const FoodApi = {
  getAllFood: (): Promise<AxiosResponse<FoodResponse>> => {
    return axiosClient.get<FoodResponse>(`/food`);
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

type FoodResponse = {
  data: Food[];
  meta: IMeta;
};
