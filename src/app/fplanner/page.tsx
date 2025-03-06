'use client';

import { FoodApi, FoodResponse } from '@/api-client/food';
import { IngredientApi } from '@/api-client/ingredient';
import { BulbOutlined, DeleteFilled, EditOutlined, HeartOutlined, PlusCircleFilled } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Card, Form, Input, message, Modal, notification, Pagination, Popover, Tabs, TabsProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useForm } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';

const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const FoodPlannerPage = () => {
  const queryClient = useQueryClient();
  const [openFood, setOpenFood] = React.useState(false);
  const [openIngredient, setOpenIngredient] = React.useState(false);
  const [foodForm] = useForm();
  const [pagination, setPagination] = React.useState<{
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }>({ total: 0, page: 1, pageSize: 5, totalPages: 1 });

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
    if (!pagination && listFood?.meta) {
      setPagination({
        page: listFood.meta.page,
        pageSize: listFood.meta.pageSize,
        total: listFood.meta.total,
        totalPages: listFood.meta.totalPages,
      });
    }
  }, []);

  console.log('Meta', listFood?.data);

  const createFoodMutation = useMutation<AxiosResponse<FoodResponse>, Error, { name: string }>({
    mutationFn: FoodApi.createFood,
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['food'] });
      notification.success({ message: 'Food', description: 'Create Successfully' });
      setOpenFood(false);
    },

    onError: (err: any) => {
      notification.error({ message: 'Food', description: 'Create Failed' });
    },
  });

  // ingredientsQuery
  const ingredientsQuery = useQuery({
    queryKey: ['ingredient'],
    queryFn: IngredientApi.getAllIngredients,
  });
  const listIngredients = ingredientsQuery.data?.data;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Foods (${listFood?.data?.length})`,
      children: (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center'>
            <Pagination
              current={pagination.page}
              total={pagination.total}
              pageSize={pagination.pageSize}
              showSizeChanger
              showTotal={total => `Total ${total} items`}
            />
          </div>

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
      label: `Ingredients (${listFood?.data?.length})`,
      children: (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center'>
            <Pagination defaultCurrent={1} total={50} />
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
    message.success('Success');
    if (!val) return;
    createFoodMutation.mutate({ name: val.name });
  };

  useEffect(() => {
    message.success('Welcome!');
  }, []);

  return (
    <section className='flex flex-col gap-6 pb-12'>
      <div className='flex justify-end gap-3'>
        <Popover content={<div>List of orders</div>} title='Prompt' trigger={'hover'} placement='bottom'>
          <Button type='primary' icon={<BulbOutlined />}>
            AI Suggest
          </Button>
        </Popover>
      </div>

      <div className='flex gap-8'>
        <div className='flex flex-[2] flex-col gap-4 rounded-2xl border p-6'>
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

        <div className='flex h-fit flex-[3] rounded-2xl border p-6'>
          <div className='grid h-[540px] w-full grid-cols-3 gap-4'>
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
        <Modal
          title='Create Food'
          centered
          open={openFood}
          footer={null}
          onCancel={() => {
            setOpenFood(false);
            foodForm.resetFields();
          }}
        >
          <Form layout='vertical' form={foodForm} onFinish={form1Submit}>
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

        <Modal
          title='Create Ingredient'
          centered
          open={openIngredient}
          onCancel={() => setOpenIngredient(false)}
          footer={[]}
        >
          123
        </Modal>
      </>
    </section>
  );
};

export default FoodPlannerPage;
