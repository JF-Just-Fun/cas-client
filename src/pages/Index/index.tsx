import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextUser } from '../../store';
import Login from './Login';
import Overlay from './Overlay';
import Register from './Register';
import { Card, Container } from './style';
import Welcome from './Welcome';

export default function () {
  const [active, setActive] = useState<string>('');
  const { userStore } = useContext(contextUser);

  const handleActive = (value: string) => {
    setActive(value);
  };

  return (
    <Container>
      <Card className={active}>
        {userStore.unId ? (
          <Welcome />
        ) : (
          <>
            <Overlay handleActive={handleActive} />
            <Register />
            <Login />
          </>
        )}
      </Card>
    </Container>
  );
}
