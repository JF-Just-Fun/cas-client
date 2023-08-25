import { RegisterButton } from './style';
import { useContext, useState } from 'react';
import { contextUser } from '../../store';
import http from '../../utils/http';
import { useNavigate } from 'react-router';
import Form from './Form';
import type { FormDataType } from './Form';

export default function Register() {
  // 使用userStore中的showAlert方法
  const { userStore } = useContext(contextUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    domain: '',
    desc: '',
    expire: 0,
  });

  const handleRegister = () => {
    // 判断formData中的name和domain是否为空
    if (!formData.name || !formData.domain) {
      userStore.showAlert('name and domain are required!', 'error');
      return;
    }

    // 提交表单到后端接口/api/application/register
    http('post', '/application/register', formData).then((res) => {
      if (res.code === 0) {
        userStore.showAlert(`application ${formData.name} register success!`, 'success');
        navigate('/apps/list');
      } else {
        userStore.showAlert(res.message);
      }
    });
  };

  return (
    <>
      <h2>Add new application</h2>
      <Form formData={formData} setFormData={setFormData} />
      <RegisterButton variant="contained" color="primary" onClick={handleRegister}>
        submit
      </RegisterButton>
    </>
  );
}
