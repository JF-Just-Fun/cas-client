import { RegisterButton } from './style';
import { useContext, useEffect, useState } from 'react';
import { contextUser } from '../../store';
import http from '../../utils/http';
import { useNavigate } from 'react-router';
import Form from './Form';
import type { FormDataType } from './Form';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export default function Edit() {
  // 使用userStore中的showAlert方法
  const { userStore } = useContext(contextUser);
  const navigate = useNavigate();

  // 获取url上的token参数
  const { token } = useParams();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    domain: '',
    desc: '',
    expire: 0,
  });

  useEffect(() => {
    // 如果token存在，说明是编辑应用，需要获取应用信息
    if (token) {
      http('get', '/application/query', { token }).then((res) => {
        if (res.code === 0) {
          setFormData({
            name: res.data[0].name,
            domain: res.data[0].domain,
            desc: res.data[0].desc,
            expire: dayjs(res.data[0].expire).valueOf(),
          });
        } else {
          userStore.showAlert(res.message);
          navigate('/apps/list');
        }
      });
    }
  }, []);

  const handleRegister = () => {
    // 判断formData中的name和domain是否为空
    if (!formData.name || !formData.domain) {
      userStore.showAlert('name and domain are required!', 'error');
      return;
    }

    // 提交表单到后端接口/api/application/update
    http('put', '/application/update', { ...formData, token }).then((res) => {
      if (res.code === 0) {
        userStore.showAlert(`application ${formData.name} update success!`, 'success');
        navigate('/apps/list');
      } else {
        userStore.showAlert(res.message);
      }
    });
  };

  return (
    <>
      <h2>Edit application: {formData.name}</h2>
      <Form formData={formData} setFormData={setFormData} />
      <RegisterButton variant="contained" color="primary" onClick={handleRegister}>
        update
      </RegisterButton>
    </>
  );
}
