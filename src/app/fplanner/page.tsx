'use client';

import { FoodApi } from '@/api-client/food';
import { IngredientApi } from '@/api-client/ingredient';
import { IFoodResponse } from '@/interface/food';
import { BulbOutlined, DeleteFilled, EditOutlined, HeartOutlined, PlusCircleFilled } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Card, Form, Input, Modal, Pagination, Popover, Skeleton, Tabs, TabsProps } from 'antd';
import useApp from 'antd/es/app/useApp';
import Meta from 'antd/es/card/Meta';
import { useForm } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import FoodModal from './_component/FoodModal';

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const FoodPlannerPage = () => {
  const { notification } = useApp();
  const queryClient = useQueryClient();
  const [openFood, setOpenFood] = React.useState(false);
  const [openIngredient, setOpenIngredient] = React.useState(false);
  const [foodForm] = useForm();
  const [ingredientFrom] = useForm();
  const [pagination, setPagination] = React.useState<{
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }>({ total: 0, page: 1, pageSize: 10, totalPages: 0 });

  const [paginationIngredient, setPaginationIngredient] = React.useState<{
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }>({ total: 0, page: 1, pageSize: 10, totalPages: 0 });

  const onChange = (key: string) => {
    console.log(key);
  };

  // FOOD
  const foodQuery = useQuery({
    queryKey: ['food', pagination.page, pagination.pageSize],
    queryFn: () => FoodApi.getAllFood({ pagination }),
  });
  const listFood = foodQuery.data?.data;

  useEffect(() => {
    if (listFood?.meta) {
      setPagination({
        page: listFood.meta.page,
        pageSize: listFood.meta.pageSize,
        total: listFood.meta.total,
        totalPages: listFood.meta.totalPages,
      });
    }
  }, [listFood]);

  // Handle Pagination Change
  const handlePaginationChange = (page: number, pageSize?: number) => {
    setPagination(prev => ({
      ...prev,
      page,
      pageSize: pageSize || prev.pageSize,
    }));
  };

  const createFoodMutation = useMutation<
    AxiosResponse<IFoodResponse>,
    Error,
    { name: string; image: any; minCalories: number; maxCalories: number; description: string }
  >({
    mutationFn: FoodApi.createFood,
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['food'] });
      notification.success({ message: 'Food', description: 'Create Successfully' });
      setOpenFood(false);
      foodForm.resetFields();
    },

    onError: (err: any) => {
      notification.error({ message: 'Food', description: 'Create Failed' });
      foodForm.resetFields();
    },
  });

  // ingredientsQuery
  const ingredientsQuery = useQuery({
    queryKey: ['ingredient', paginationIngredient.page, paginationIngredient.pageSize],
    queryFn: () => IngredientApi.getAllIngredients({ pagination: paginationIngredient }),
  });
  const listIngredients = ingredientsQuery.data?.data;

  const createIngredientMutation = useMutation<AxiosResponse<IFoodResponse>, Error, { name: string }>({
    mutationFn: IngredientApi.createFood,
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['ingredient'] });
      notification.success({ message: 'Ingredient', description: 'Create Successfully' });
      setOpenIngredient(false);
      ingredientFrom.resetFields();
    },

    onError: (err: any) => {
      notification.error({ message: 'Ingredient', description: 'Create Failed' });
      setOpenIngredient(false);
      ingredientFrom.resetFields();
    },
  });

  useEffect(() => {
    if (listIngredients?.meta) {
      setPaginationIngredient({
        page: listIngredients.meta.page,
        pageSize: listIngredients.meta.pageSize,
        total: listIngredients.meta.total,
        totalPages: listIngredients.meta.totalPages,
      });
    }
  }, [listIngredients]);

  // Handle Pagination Change
  const handlePaginationIngredientChange = (page: number, pageSize?: number) => {
    setPaginationIngredient(prev => ({
      ...prev,
      page,
      pageSize: pageSize || prev.pageSize,
    }));
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Foods (${listFood?.data?.length || 0})`,
      children: (
        <div className='flex flex-col gap-4'>
          {foodQuery.isLoading ? (
            <PaginationSkeleton />
          ) : (
            <div className='flex justify-end'>
              <Pagination
                onChange={handlePaginationChange}
                current={pagination.page}
                total={pagination.total}
                pageSize={pagination.pageSize}
                showSizeChanger
                showTotal={total => `Total ${total} items`}
              />
            </div>
          )}

          <div className='grid flex-1 grid-cols-2 gap-4'>
            {listFood?.data.map(food => (
              <Card
                key={food.id}
                cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
                actions={[
                  <HeartOutlined key='setting' />,
                  <EditOutlined key='edit' />,
                  <DeleteFilled key='ellipsis' />,
                ]}
              >
                <Meta title='Card title' description='This is the description' />
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: `Ingredients (${listIngredients?.data?.length || 0})`,
      children: (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-end'>
            <Pagination
              onChange={handlePaginationIngredientChange}
              current={paginationIngredient.page}
              total={paginationIngredient.total}
              pageSize={paginationIngredient.pageSize}
              showSizeChanger
              showTotal={total => `Total ${total} items`}
            />
          </div>

          <div className='grid flex-1 grid-cols-2 gap-4'>
            {listIngredients?.data.map(food => (
              <Card
                key={food.id}
                cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
                actions={[
                  <HeartOutlined key='setting' />,
                  <EditOutlined key='edit' />,
                  <DeleteFilled key='ellipsis' />,
                ]}
              >
                <Meta title='Card title' description='This is the description' />
              </Card>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const form1Submit = (val: any) => {
    if (!val) return;
    createFoodMutation.mutate({ ...val });
  };

  const form2Submit = (val: any) => {
    if (!val) return;
    createIngredientMutation.mutate({ name: val.name });
  };

  return (
    <section className='flex flex-col gap-6 px-6 pb-12'>
      <div className='flex justify-end gap-3'>
        <Popover content={<div>List of orders</div>} title='Prompt' trigger={'hover'} placement='bottom'>
          <Button type='primary' icon={<BulbOutlined />}>
            AI Suggest
          </Button>
        </Popover>
      </div>

      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='order-2 flex flex-[2] flex-col gap-4 rounded-2xl border p-6 md:order-1'>
          <div className='flex gap-3'>
            <Button type='primary' icon={<PlusCircleFilled />} onClick={() => setOpenFood(true)}>
              Food
            </Button>
            <Button type='primary' icon={<PlusCircleFilled />} onClick={() => setOpenIngredient(true)}>
              Ingredient
            </Button>
          </div>

          <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        </div>

        <div className='order-1 flex h-fit flex-[3] rounded-2xl border p-6 md:order-2'>
          <div className='grid h-[540px] w-full grid-cols-1 gap-4 md:grid-cols-3'>
            {dayOfWeek.map(day => (
              <div key={day} className='rounded-lg bg-blue-200 p-4 text-center'>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <>
        <FoodModal
          loading={createFoodMutation.isPending}
          foodForm={foodForm}
          onFinish={form1Submit}
          openFood={openFood}
          setOpenFood={setOpenFood}
        />

        <Modal
          title='Create Ingredient'
          centered
          open={openIngredient}
          onCancel={() => setOpenIngredient(false)}
          footer={[]}
        >
          <Form layout='vertical' form={ingredientFrom} onFinish={form2Submit}>
            <FormItem
              label='Name'
              name='name'
              required
              rules={[{ required: true, message: 'Please input name of your food!' }]}
            >
              <Input placeholder='Enter name of your food!' />
            </FormItem>

            <div className='flex justify-end'>
              <Button htmlType='submit' type='primary'>
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      </>
    </section>
  );
};

export default FoodPlannerPage;

const PaginationSkeleton = () => {
  return (
    <div className='flex justify-end'>
      <div className='flex w-[300px] items-center gap-2'>
        {/* Skeleton cho phần showTotal */}
        <Skeleton className='h-8' active paragraph={{ rows: 0 }} title={{ width: 100 }} />

        {/* Skeleton cho các nút pagination */}
        <Skeleton className='h-8' active paragraph={{ rows: 0 }} title={{ width: 150 }} />

        {/* Skeleton cho phần showSizeChanger */}
        <Skeleton className='h-8' active paragraph={{ rows: 0 }} title={{ width: 50 }} />
      </div>
    </div>
  );
};
