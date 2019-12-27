import React from "react";
import auth from "./auth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { commonBtn } from "../../Common/GlobalStyles/buttonsStyles";

function SignIn() {
  let history = useHistory();

  return (
    <div>
      {!auth.authenticated ? (
        <Button
          common
          onClick={() => {
            auth.login(() => {
              history.push("/loged");
            });
          }}
        >
          Sign in
        </Button>
      ) : (
        <Button
          common
          onClick={() => {
            auth.logout(() => {
              history.push("/");
            });
          }}
        >
          Sign out
        </Button>
      )}
    </div>
  );
}

// Styled components.

const Button = styled.button`
  ${props => props.common && commonBtn}
  margin-right: 2rem;
`;

export default SignIn;
