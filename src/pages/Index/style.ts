import styled from 'styled-components';

type ContainerType = {
  background?: string;
};
export const Container = styled.div<ContainerType>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #f8f9fc;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  &#sign-in-container {
    transform: rotateY(-180deg);
    left: 50%;
    transform-origin: left;
  }
  &#sign-up-container {
    transform: rotateY(0);
    transform-origin: right;
  }
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
  border-bottom: 2px solid transparent;
  &:hover {
    color: lightslategray;
    border-bottom: 2px solid #ff4b2b;
  }
`;

export const Button = styled.button`
  background: #000000;
  padding: 10px 50px;
  border: 1px solid transparent;
  border-radius: 20px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  outline: none;
  transition: transform 80;
  cursor: pointer;
  &:active,
  &:hover {
    transform: scale(0.95);
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  right: 0;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const WelcomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #ffffff;
  font-size: 28px;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  text-align: center;
`;

export const NavigateLink = styled.div`
  position: absolute;
  font-size: 16px;
  left: 50%;
  top: 70%;
  transform: translate(-50%);
`;

export const Card = styled.div`
  position: relative;
  width: 768px;
  height: 480px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 15px 25px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(2px) brightness(60%) saturate(80%);
  overflow: hidden;
  &.active {
    & #sign-in-container {
      left: 50%;
      transform: rotateY(0);
    }
    & #sign-up-container {
      transform: rotateY(180deg);
    }
    & #panel-left {
      opacity: 1;
    }
    & #panel-right {
      opacity: 0;
    }
  }
`;

export const OverlayPanel = styled.div`
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
  box-sizing: border-box;
  transition: opacity 0.8s;
  & button {
    background-color: transparent;
    border: 1px solid white;
  }
  & p {
    font-size: 12px;
    margin: 10px 0 15px 0;
  }
  &#panel-right {
    right: 0;
    opacity: 1;
  }
  &#panel-left {
    opacity: 0;
  }
`;
