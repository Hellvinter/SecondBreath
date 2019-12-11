import React from "react";
import auth from "./auth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { commonBtn } from "../../Common/GlobalStyles/buttonsStyles";

const Button = styled.button`
  ${props => props.common && commonBtn}
  margin-right: 2rem;
`;

function IndexLogIn() {
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

export default IndexLogIn;
