import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSumbit = this.onSumbit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSumbit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);

    axios
      .post("http://localhost:4000/api/user/registration", user)
      .then(res => console.log(res.data));

    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <Main>
        <FormWrapper>
          <Heading>Sign in</Heading>
          <Form onSubmit={this.onSumbit}>
            <Label>
              User name
              <Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUserName}
              />
            </Label>
            <Label>
              Email
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </Label>
            <Label>
              Password
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </Label>
            <Submit type="submit">submit</Submit>
          </Form>
        </FormWrapper>
      </Main>
    );
  }
}

// Styles
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

export default RegistrationForm;
