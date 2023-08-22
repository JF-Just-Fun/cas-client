import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { FormContainer, HeadCell, RegisterButton, TableHead } from './style';
import http from '../../utils/http';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type AppListType = Array<{
  name: string;
  token: string;
  domain: string;
  desc: string;
  expire: string;
}>;

export default function AppList() {
  const navigate = useNavigate();

  const mockList = [
    { name: 'app4', token: '34dfgsd', domain: 'yinpo.space', desc: 'this is desc...', expire: '', status: false },
    {
      name: 'app5',
      token: 'asd',
      domain: 'yinpo.space',
      desc: 'this is desc...this is desc...this is desc...this is desc...this is desc...this is desc...this is desc...this is desc...this is desc...this is desc...',
      expire: '',
      status: false,
    },
  ];

  const [List, setList] = useState<AppListType>();

  useEffect(() => {
    http('get', '/application/query').then((res) => {
      if (res.code === 0) {
        setList(res.data);
      }
    });
  }, []);

  return (
    <FormContainer>
      <Table>
        <TableHead>
          <TableRow className="table-row">
            <HeadCell align="center">Index</HeadCell>
            <HeadCell>Name</HeadCell>
            <HeadCell>Token</HeadCell>
            <HeadCell>Domain</HeadCell>
            <HeadCell>Description</HeadCell>
            <HeadCell>Expire</HeadCell>
            <HeadCell align="center">Operation</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {List?.map((item, index) => (
            <TableRow key={item.token}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.token}</TableCell>
              <TableCell>
                <a href={item.domain} target="_blank">
                  {item.domain}
                </a>
              </TableCell>
              <TableCell>{item.desc}</TableCell>
              <TableCell>{item.expire || '-'}</TableCell>
              <TableCell align="center">
                <Link href="#">Edit</Link>&ensp;<Link href="#">Del</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <RegisterButton variant="contained" disableRipple onClick={() => navigate('/apps/register')}>
        register new application
      </RegisterButton>
    </FormContainer>
  );
}
