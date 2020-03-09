import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:4000/api/user/login", user)
      .then(res => console.log(res.data));

    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <Main>
        <FormWrapper>
          <Heading>Sign in</Heading>
          <Form onSubmit={this.onSubmit}>
            <Label>
              User name
              <Input
                type="text"
                name="user"
                value={this.state.username}
                onChange={this.onChangeUserName}
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
  color: #fff;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 25rem;
  min-width: 35rem;
  background-color: #1d2d3d;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 1);
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
  margin: 1.5rem auto;
  width: 5rem;
  border: 1px solid #fff;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
`;

export default SignInForm;
