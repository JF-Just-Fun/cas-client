import { useState } from 'react';
import Login from './Login';
import Overlay from './Overlay';
import Register from './Register';
import { Card, Container } from './style';

export default function () {
  const [active, setActive] = useState<string>('');

  const handleActive = (value: string) => {
    setActive(value);
  };

  return (
    <Container>
      <Card className={active}>
        <Overlay handleActive={handleActive} />
        <Register />
        <Login />
      </Card>
    </Container>
  );
}
