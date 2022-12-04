import { ChangeEvent, useState } from 'react';
import { FormContainer, Form, Input, ForgetPassword, Button } from './style';

export default function Login() {
  type loginFormType = {
    email: string;
    password: string;
  };
  const [loginForm, setLoginForm] = useState<loginFormType>({ email: '', password: '' });

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setLoginForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    console.log('=> loginForm', loginForm);
  };

  return (
    <FormContainer id="sign-in-container">
      <Form>
        <h2>sign in</h2>
        <Input
          type="email"
          name="email"
          id="l-email"
          value={loginForm.email}
          onChange={handleFormChange}
          placeholder="Email..."
        />
        <Input
          type="password"
          name="password"
          id="l-password"
          value={loginForm.password}
          onChange={handleFormChange}
          placeholder="Password..."
        />
        <ForgetPassword href="#" className="forget-password">
          forget password?
        </ForgetPassword>
        <Button id="signIn" onClick={handleSignIn}>
          sign in
        </Button>
      </Form>
    </FormContainer>
  );
}
