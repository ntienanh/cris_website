import axiosClient from '@/helper/axiosClient';
import { IFoodResponse } from '@/interface/food';
import { AxiosResponse } from 'axios';

export const FoodApi = {
  getAllFood: ({ pagination }: { pagination?: any }): Promise<AxiosResponse<IFoodResponse>> => {
    const condition = pagination ? `?page=${pagination.page}&pageSize=${pagination.pageSize}` : '';
    return axiosClient.get<IFoodResponse>(`/food${condition}`);
  },
  createFood: ({
    name,
    image,
    minCalories,
    maxCalories,
    description,
  }: {
    name: string;
    image: File; // Image là File, không phải string
    minCalories: number;
    maxCalories: number;
    description: string;
  }): Promise<AxiosResponse<IFoodResponse>> => {
    console.log('imageimageimage', image);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image?.fileList[0].originFileObj); // Đảm bảo image là File
    formData.append('minCalories', minCalories.toString());
    formData.append('maxCalories', maxCalories.toString());
    formData.append('description', description);

    return axiosClient.post<IFoodResponse>('/food', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
