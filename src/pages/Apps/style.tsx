import styled from 'styled-components';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import MuiTextField from '@mui/material/TextField';
import MuiLink from '@mui/material/Link';

type ContainerType = {
  background?: string;
};

export const Container = styled.div<ContainerType>`
  min-width: 1200px;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const FormContainer = styled(TableContainer)`
  position: relative;
  margin: 0 auto;
  color: #000000;
  width: 1200px;
  min-height: 600px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(190, 190, 190, 0.5);
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const TableHead = styled(MuiTableHead)``;

export const HeadCell = styled(TableCell)`
  font-weight: bolder;
`;

export const RegisterButton = styled(Button)`
  margin: 50px auto 20px;
  display: block;
`;

export const TextField = styled(MuiTextField)`
  min-width: 50%;
`;

export const DatePicker = styled(MuiDatePicker)`
  margin: 10px 0;
  width: 25%;
`;

export const Link = styled(MuiLink)`
  cursor: pointer;
`;
