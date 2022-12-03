import { FormContainer, Form, Input, Button } from './style';

export default function Register() {
  return (
    <FormContainer className="form-container sign-up-container">
      <Form className="form">
        <h2>sign up</h2>
        <Input type="text" name="username" id="username" placeholder="Username..." />
        <Input type="email" name="emal" id="email" placeholder="Email..." />
        <Input type="password" name="password" id="password" placeholder="Password..." />
        <Button className="signUp">sign up</Button>
      </Form>
    </FormContainer>
  );
}
