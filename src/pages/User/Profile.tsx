import { useContext, useState } from 'react';
import { Container, DatePicker, EditButton, FormControlLabel, TextField } from './style';
import { contextUser } from '../../store';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import http from '../../utils/http';

export default function () {
  const { userStore } = useContext(contextUser);

  const [edit, setEdit] = useState(false);
  const [formDate, setFormDate] = useState({
    name: userStore.name,
    email: userStore.email,
    avatar: userStore.avatar,
    manager: userStore.manager,
    phone: userStore.phone,
    birth: userStore.birth,
    gender: userStore.gender,
  });

  const updateFormData = (key: string, value: string) => {
    setFormDate((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleEditAndSave = () => {
    setEdit((prev) => !prev);
    if (edit) {
      // 遍历判断formDate中的值是否和userStore中的值相同，如果相同则不需要传递给接口
      type FormDateType = typeof formDate;
      const data = (Object.keys(formDate) as Array<keyof FormDateType>).reduce(
        (res: Partial<FormDateType>, key: keyof FormDateType) => {
          if (formDate[key] !== userStore[key]) {
            res[key] = formDate[key] as any;
          }
          return res;
        },
        {} as Partial<FormDateType>,
      );

      if (Object.keys(data).length === 0) return;

      http('post', '/user/update', data).then((res) => {
        if (res.code === 0) {
          userStore.showAlert('update success', 'success');
          userStore.profile();
        } else {
          userStore.showAlert(res.message);
        }
      });
    }
  };

  return (
    <Container>
      <h1>User profile</h1>
      <TextField
        disabled={!edit}
        id="profile-name"
        label="name"
        defaultValue={userStore.name}
        key={userStore.name}
        onChange={(e) => updateFormData('name', e.target.value)}
      />
      <TextField
        disabled={!edit}
        id="profile-email"
        label="email"
        defaultValue={userStore.email}
        key={userStore.email}
        onChange={(e) => updateFormData('email', e.target.value)}
      />
      <TextField
        disabled={!edit}
        id="profile-avatar"
        label="avatar"
        defaultValue={userStore.avatar}
        key={userStore.avatar}
        onChange={(e) => updateFormData('avatar', e.target.value)}
      />
      <TextField
        disabled={!edit}
        select
        id="profile-manager"
        label="manager"
        defaultValue={userStore.manager}
        key={`${userStore.manager}`}
        onChange={(e) => updateFormData('manager', e.target.value)}
      >
        <MenuItem value="true">true</MenuItem>
        <MenuItem value="false">false</MenuItem>
      </TextField>
      <TextField
        disabled={!edit}
        id="profile-phone"
        label="phone"
        defaultValue={userStore.phone}
        key={userStore.phone}
        onChange={(e) => updateFormData('phone', e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
        <DatePicker
          label="birth"
          format="YYYY-MM-DD"
          disabled={!edit}
          defaultValue={dayjs(userStore.birth)}
          key={userStore.birth}
          onAccept={(value) => updateFormData('birth', dayjs(value as Date).format('YYYY-MM-DD'))}
        />
      </LocalizationProvider>
      <TextField
        disabled={!edit}
        id="profile-gender"
        select
        label="gender"
        defaultValue={userStore.gender}
        key={userStore.gender}
        onChange={(e) => updateFormData('gender', e.target.value)}
      >
        <MenuItem value="male">male</MenuItem>
        <MenuItem value="female">female</MenuItem>
      </TextField>
      <EditButton variant="contained" onClick={handleEditAndSave}>
        {edit ? 'save' : 'edit'}
      </EditButton>
    </Container>
  );
}
