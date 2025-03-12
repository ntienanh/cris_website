import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';

interface UploadImageFormProps {
  value?: any[];
  onChange?: (fileList: any[]) => void;
  multiple?: boolean;
}

const UploadImageForm: React.FC<UploadImageFormProps> = ({ value, onChange, multiple = false }) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');

  const handlePreview = async (file: any) => {
    setPreviewImage(file.url || file.thumbUrl || '');
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList }: { fileList: any[] }) => {
    onChange?.(fileList);
  };

  return (
    <>
      <FormItem label='Image' name='image' required rules={[{ required: true, message: 'Please upload an image!' }]}>
        <Upload
          multiple={multiple}
          listType='picture-circle'
          fileList={value}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false} // Prevent auto-upload
        >
          {value && value.length >= 1 ? null : <PlusOutlined />}
        </Upload>
      </FormItem>

      <Modal open={previewOpen} footer={null} onCancel={() => setPreviewOpen(false)}>
        <img alt='preview' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadImageForm;
