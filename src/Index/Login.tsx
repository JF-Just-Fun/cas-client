import { FormContainer, Form, Input, ForgetPassword, Button } from './style';

export default function Login() {
  return (
    <FormContainer className="form-container sign-in-container">
      <Form className="form">
        <h2>sign in</h2>
        <Input type="email" name="emal" id="email" placeholder="Email..." />
        <Input type="password" name="password" id="password" placeholder="Password..." />
        <ForgetPassword href="#" className="forget-password">
          forget your password
        </ForgetPassword>
        <Button className="signIn">sign in</Button>
      </Form>
    </FormContainer>
  );
}
