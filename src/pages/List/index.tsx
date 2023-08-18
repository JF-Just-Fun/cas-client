import { contextUser } from '../../store';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer } from './style';

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
    <Container>
      <FormContainer>
        <h1>List Page</h1>
      </FormContainer>
    </Container>
  );
}
