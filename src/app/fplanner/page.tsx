'use client';

import { FoodApi } from '@/api-client/food';
import { BulbOutlined, DeleteFilled, EditOutlined, HeartOutlined, PlusCircleFilled } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Pagination, Popover, Tabs, TabsProps } from 'antd';
import Meta from 'antd/es/card/Meta';

const FoodPlannerPage = () => {
  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const onChange = (key: string) => {
    console.log(key);
  };

  const foodQuery = useQuery({
    queryKey: ['food'],
    queryFn: FoodApi.getAllFood,
  });
  const listFood = foodQuery.data?.data;

  const ingredientsQuery = useQuery({
    queryKey: ['food'],
    queryFn: FoodApi.getAllFood,
  });
  const listIngredients = ingredientsQuery.data?.data;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Foods (${listFood?.data?.length})`,
      children: (
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center'>
            <Pagination defaultCurrent={1} total={50} />
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
        <div className='grid flex-1 grid-cols-2 gap-4'>
          {listIngredients?.data.map(ingredient => (
            <Card
              key={ingredient.id}
              cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
              actions={[<HeartOutlined key='setting' />, <EditOutlined key='edit' />, <DeleteFilled key='ellipsis' />]}
            >
              <Meta title='Card title' description='This is the description' />
            </Card>
          ))}
        </div>
      ),
    },
  ];

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
            <Button type='primary' icon={<PlusCircleFilled />}>
              Food
            </Button>
            <Button type='primary' icon={<PlusCircleFilled />}>
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
    </section>
  );
};

export default FoodPlannerPage;
