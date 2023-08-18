import styled from 'styled-components';
import wallhaven from '@/assets/wallhaven.jpg';

type ContainerType = {
  background?: string;
};

export const Container = styled.div<ContainerType>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: blur(2px) saturate(90%) opacity(90%);
    background-image: url(${(props) => props.background || wallhaven});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  width: 1200px;
  min-height: 800px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
`;
