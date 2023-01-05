import { contextUser } from '../../store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function () {
  const { userStore } = useContext(contextUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStore.manager) {
      navigate('/');
    }
  }, [userStore]);

  if (!userStore.manager) return null;

  return (
    <>
      <h1>List Page</h1>
    </>
  );
}
