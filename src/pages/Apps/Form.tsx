import { DatePicker, TextField } from './style';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export type FormDataType = {
  name?: string;
  domain?: string;
  desc?: string;
  expire: number;
};

export type propsType = {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
};

export default function Register(props: propsType) {
  const updateFormData = (key: string, value: string | number) => {
    props.setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <TextField
        required
        error={!props.formData.name}
        size="small"
        margin="normal"
        id="form-name"
        label="Name"
        value={props.formData.name}
        onChange={(e) => updateFormData('name', e.target.value)}
      />
      <br />
      <TextField
        required
        error={!props.formData.domain}
        size="small"
        margin="normal"
        id="form-domain"
        label="Domain"
        value={props.formData.domain}
        onChange={(e) => updateFormData('domain', e.target.value)}
      />
      <br />
      <TextField
        size="small"
        margin="normal"
        multiline
        minRows={2}
        fullWidth
        id="form-desc"
        label="Desc"
        value={props.formData.desc}
        onChange={(e) => updateFormData('desc', e.target.value)}
      />
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
        <DatePicker
          label="Expire"
          format="YYYY-MM-DD"
          onAccept={(value) => updateFormData('expire', dayjs(value as Date).valueOf())}
        />
      </LocalizationProvider>
    </>
  );
}
