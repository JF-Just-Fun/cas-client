import { contextUser } from '../../store';
import { useContext, useEffect } from 'react';
import { Outlet, Router, useLocation, useNavigate } from 'react-router-dom';
import { Container, FormContainer } from './style';
import AppList from './AppList';

export default function () {
  const { userStore } = useContext(contextUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/apps' || location.pathname === '/apps/') {
      navigate('/apps/list');
    }

    const timer = setTimeout(() => {
      if (!userStore?.unId || !userStore?.manager) {
        navigate('/');
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [userStore.unId]);

  return (
    <Container>
      <FormContainer>
        {!userStore?.unId || !userStore?.manager ? <h1>no user info, please login again!</h1> : <Outlet />}
      </FormContainer>
    </Container>
  );
}
