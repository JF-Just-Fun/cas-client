import { ChangeEvent, useState } from 'react';
import http from '../../utils/http';
import { FormContainer, Form, Input, Button } from './style';

export default function Register() {
  type registerFormType = {
    name: string;
    email: string;
    password: string;
  };
  const [registerForm, setRegisterForm] = useState<registerFormType>({ name: '', email: '', password: '' });

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setRegisterForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    console.log('=> registerForm', registerForm);
    http('post', '/user/register', registerForm).then((res) => {
      if (res.code === 0) {
        setRegisterForm({ name: '', email: '', password: '' });
      } else {
        alert(res.message);
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
