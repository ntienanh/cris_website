'use client';

import DescriptionForm from '@/components/elements/Form/DescriptionForm';
import UploadImageForm from '@/components/elements/Form/UploadImageForm';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useEffect } from 'react';

interface PageProps {
  openFood: boolean;
  setOpenFood: (openFood: boolean) => void;
  foodForm: any;
  onFinish: (vals: any) => void;
  loading: boolean;
}

const FoodModal = (props: PageProps) => {
  const { foodForm, onFinish, openFood, setOpenFood, loading } = props;

  useEffect(() => {
    foodForm.setFieldsValue({ maxCalories: undefined });
  }, [foodForm.getFieldValue('minCalories')]);

  return (
    <Modal
      title={<div className='mr-5 text-center'>Create Food</div>}
      centered
      open={openFood}
      footer={null}
      onCancel={() => {
        setOpenFood(false);
        foodForm.resetFields();
      }}
    >
      <Form
        initialValues={{
          name: '',
          image: '',
          minCalories: 0,
          maxCalories: 1,
          description: '',
        }}
        layout='vertical'
        form={foodForm}
        onFinish={onFinish}
      >
        <FormItem
          label='Name'
          name='name'
          required
          rules={[{ required: true, message: 'Please input name of your food!' }]}
        >
          <Input placeholder='Enter name of your food!' />
        </FormItem>

        <UploadImageForm />

        <FormItem
          label='Min Calories'
          name='minCalories'
          rules={[
            { type: 'number', min: 0, message: 'Min Calories must be positive!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value === undefined || isNaN(value)) {
                  return Promise.reject(new Error('Please enter a valid number!'));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <InputNumber
            placeholder='Min Calories!'
            style={{ width: '100%' }}
            min={0}
            onChange={(value: any) => {
              if (isNaN(value)) {
                foodForm.setFieldsValue({ minCalories: undefined });
              }
            }}
          />
        </FormItem>

        <FormItem
          label='Max Calories'
          name='maxCalories'
          dependencies={['minCalories']}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const minCalories = getFieldValue('minCalories');

                if (value >= minCalories) {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <InputNumber placeholder='Max Calories!' style={{ width: '100%' }} min={0} />
        </FormItem>

        <DescriptionForm />

        <div className='flex justify-end'>
          <Button loading={loading} htmlType='submit' type='primary'>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default FoodModal;
