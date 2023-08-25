import { ChangeEvent, useContext, useState } from 'react';
import http from '../../utils/http';
import { FormContainer, Form, Input, Button } from './style';
import { ACTION_TYPE, contextUser } from '../../store';

type loginFormType = {
  email: string;
  password: string;
};

export default function Register() {
  type registerFormType = {
    name: string;
    email: string;
    password: string;
  };
  const [registerForm, setRegisterForm] = useState<registerFormType>({ name: '', email: '', password: '' });
  const { userStore, dispatchUserStore } = useContext(contextUser);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setRegisterForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSignIn = (loginForm: loginFormType) => {
    http('post', '/user/login', loginForm).then((res) => {
      if (res.code === 0) {
        dispatchUserStore!({ type: ACTION_TYPE.UPDATE_USER, payload: res.data });
      } else {
        userStore.showAlert(res.message);
      }
    });
  };

  const handleSignUp = () => {
    http('post', '/user/register', registerForm).then((res) => {
      if (res.code === 0) {
        setRegisterForm({ name: '', email: '', password: '' });
        handleSignIn({ email: registerForm.email, password: registerForm.password });
      } else {
        userStore.showAlert(res.message);
      }
    });
  };

  return (
    <FormContainer id="sign-up-container">
      <Form>
        <h2>sign up</h2>
        <Input
          type="text"
          name="name"
          id="r-username"
          value={registerForm.name}
          onChange={handleFormChange}
          placeholder="Username..."
        />
        <Input
          type="email"
          name="email"
          id="r-email"
          value={registerForm.email}
          onChange={handleFormChange}
          placeholder="Email..."
        />
        <Input
          type="password"
          name="password"
          id="r-password"
          value={registerForm.password}
          onChange={handleFormChange}
          placeholder="Password..."
        />
        <Button id="signUp" onClick={handleSignUp}>
          sign up
        </Button>
      </Form>
    </FormContainer>
  );
}
