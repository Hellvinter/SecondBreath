import React from "react";
import styled from "styled-components";

const RegistrationForm = props => (
  <Main>
    <FormWrapper>
      <Heading>Sign in</Heading>
      <Form>
        <Label>
          User name
          <Input type="text" name="user" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Submit type="submit">submit</Submit>
      </Form>
    </FormWrapper>
  </Main>
);

const SignInForm = props => (
  <Main>
    <FormWrapper>
      <Heading>Sign in</Heading>
      <Form>
        <Label>
          User name
          <Input type="text" name="user" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Submit type="submit">submit</Submit>
      </Form>
    </FormWrapper>
  </Main>
);

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 25rem;
  min-width: 35rem;
  box-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

const Heading = styled.h3`
  margin-bottom: 1.5rem;
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.75rem auto;
  font-weight: 600;
`;

const Input = styled.input`
  margin-left: 0.5rem;
`;

const Submit = styled.button`
  background: none;
  border: 1px solid black;
  width: 5rem;
  cursor: pointer;
  margin: 1.5rem auto;
  text-transform: capitalize;
`;

export { RegistrationForm, SignInForm };
