import React from "react";
import styled from "styled-components";

import { flexRow, justifyBetween } from "../Common/GlobalStyles/flexStyles";

import IndexLogIn from "./LogIn/indexLogIn";
import IndexNav from "./Nav/indexNav";

// Styled components.
const Row = styled.div`
  ${props => props.flex && [flexRow, justifyBetween]};
  background-color: ${props => (props.rowOne ? "#55b286" : "#fff")};
`;

const Logo = styled.h2`
  margin-left: 2rem;
`;

function Header() {
  return (
    <header>
      <Row rowOne flex>
        <Logo>Big house</Logo>
        <IndexLogIn />
      </Row>
      <Row flex>
        <IndexNav />
      </Row>
    </header>
  );
}

export default Header;
