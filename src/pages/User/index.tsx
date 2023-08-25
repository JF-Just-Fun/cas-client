import { createPortal } from 'react-dom';
import { contextUser } from '../../store';
import { useContext, useEffect } from 'react';
import { Dropdown, Menu, MenuButton, MenuItem, PopContainer } from './style';
import { useNavigate } from 'react-router-dom';

type PropsType = {};

// 页面右上角的用户信息弹窗
export default function (props: PropsType) {
  const { userStore } = useContext(contextUser);
  const navigate = useNavigate();

  const logOut = () => {
    userStore.logout();
    navigate('/');
  };

  return createPortal(
    <PopContainer>
      <Dropdown>
        <MenuButton>{userStore.name}</MenuButton>
        <Menu>
          {
            // 如果是管理员，显示管理应用的选项
            userStore.manager && <MenuItem onClick={() => navigate('/apps')}>Manage</MenuItem>
          }
          <MenuItem onClick={() => navigate('/user/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => navigate('/user/settings')}>Settings</MenuItem>
          <MenuItem onClick={logOut}>Log out</MenuItem>
        </Menu>
      </Dropdown>
    </PopContainer>,
    document.body,
  );
}
