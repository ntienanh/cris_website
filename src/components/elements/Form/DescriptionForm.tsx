import { Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { TextAreaProps } from 'antd/es/input';

interface DescriptionFormProps extends TextAreaProps {
  label?: string;
  name?: string;
}

const DescriptionForm = (props: DescriptionFormProps) => {
  const { label = 'Description', name = 'description' } = props;

  return (
    <FormItem
      label={label}
      name={name}
      required
      rules={[{ required: true, message: 'Please input name of your food!' }]}
    >
      <Input.TextArea
        style={{
          resize: 'none',
          height: 120,
          WebkitTextSizeAdjust: 'none',
          textSizeAdjust: 'none',
          fontSize: '14px',
        }}
        placeholder='Description'
      />
    </FormItem>
  );
};

export default DescriptionForm;
