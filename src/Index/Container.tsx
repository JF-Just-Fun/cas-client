import { useState } from 'react';
import Login from './Login';
import Overlay from './Overlay';
import Register from './Register';
import { Card, Container } from './style';

export default function () {
  const [active, setActive] = useState<string>('');

  const handleActive = (value: string) => {
    console.log('=> handle active');

    setActive(value);
  };

  return (
    <Container>
      <Card className={active}>
        <Register />
        <Login />
        <Overlay handleActive={handleActive} />
      </Card>
    </Container>
  );
}
