import React from "react";
import styled from "styled-components";

import { flexRow, justifyBetween } from "../../../reusable_styles/flexStyles";

//import SignIn from "./sign_in_old_build/index_sign_in";
import Navigation from "./navigation/navigation";

function Header() {
  return (
    <header>
      <Row flex>
        <Logo>Big house</Logo>
        <TemporaryComponent>Sign in</TemporaryComponent>
      </Row>
      <Row flex>
        <Navigation />
      </Row>
    </header>
  );
}

// Styled components.
const Row = styled.div`
  ${props => props.flex && [flexRow, justifyBetween]};
  ${"" /* background-color: ${props => (props.rowOne ? "#55b286" : "#fff")}; */}
`;

const Logo = styled.h2`
  margin-left: 2rem;
`;

const TemporaryComponent = styled.p`
  margin-right: 2rem;
`;

export default Header;
