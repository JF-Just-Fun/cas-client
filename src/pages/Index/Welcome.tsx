import { OverlayContainer, Overlay, WelcomeContainer, NavigateLink, TextContainer } from './style';
import { contextUser } from '../../store';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

type PropsType = {};

export default function (props: PropsType) {
  const { userStore } = useContext(contextUser);

  return (
    <OverlayContainer>
      <WelcomeContainer>
        <TextContainer>欢迎登录，{userStore.name}</TextContainer>
        <NavigateLink>{userStore.manager && <Link to="/list">授权列表</Link>}</NavigateLink>
      </WelcomeContainer>
    </OverlayContainer>
  );
}
