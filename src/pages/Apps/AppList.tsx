import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { FormContainer, HeadCell, Link, RegisterButton, TableHead } from './style';
import http from '../../utils/http';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextUser } from '../../store';

export type AppListType = Array<{
  name: string;
  token: string;
  domain: string;
  desc: string;
  expire: string;
}>;

export default function AppList() {
  const navigate = useNavigate();
  const { userStore } = useContext(contextUser);

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

  const handleDelete = (token: string) => {
    http('delete', '/application/remove', { token }).then((res) => {
      if (res.code === 0) {
        setList((prev) => {
          return prev?.filter((item) => item.token !== token);
        });
      } else {
        userStore.showAlert(res.message);
      }
    });
  };

  const handleEdit = (token: string) => {
    navigate(`/apps/edit/${token}`);
  };

  return (
    <>
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
                <Link onClick={() => handleEdit(item.token)}>Edit</Link>&ensp;
                <Link onClick={() => handleDelete(item.token)}>Del</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <RegisterButton variant="contained" disableRipple onClick={() => navigate('/apps/register')}>
        register new application
      </RegisterButton>
    </>
  );
}
