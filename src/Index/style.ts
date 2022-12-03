import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  width: 768px;
  height: 480px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  &.active {
    & .sign-up-container {
      transform: translateX(100%);
      z-index: 5;
    }
    & .sign-in-container {
      transform: translateX(100%);
    }
    & .overlay_container {
      transform: translateX(-100%);
    }
    & .overlay {
      transform: translateX(50%);
    }
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  transition: all 0.6s ease-in-out;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  background-color: #eee;
  border: none;
`;

export const ForgetPassword = styled.a`
  display: inline-block;
  height: 20px;
  text-decoration: none;
  color: #bbb;
  text-transform: capitalize;
  font-size: 12px;
  &:hover {
    color: lightslategray;
    border-bottom: 2px solid #ff4b2b;
  }
`;

export const Button = styled.button`
  background: #ff4b2b;
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  outline: none;
  transition: transform 80;
  &:active {
    transform: scale(0.95);
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 100;
  right: 0;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  left: -100%;
  background-color: #ff4b2b;
`;

type OverlayPanelType = {
  right?: number;
};
export const OverlayPanel = styled.div<OverlayPanelType>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: white;
  padding: 0 40px;
  text-align: center;
  & button {
    background-color: transparent;
    border: 1px solid white;
  }
  & p {
    font-size: 12px;
    margin: 10px 0 15px 0;
  }
  box-sizing: border-box;
  right: ${(props) => props.right};
`;
