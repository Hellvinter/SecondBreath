import React from "react";
import styled from "styled-components";

import { flexRow, justifyBetween } from "../../../styles/flexStyles";

import Navigation from "./navigation";
import SocialMedia from "../social_media/social_media";

function Header() {
  return (
    <HeaderStyled flex>
      <Navigation />
      <Logo>Fantasy worlds</Logo>
      <StyledMedia flex>
        <SocialMedia />
      </StyledMedia>
      <TemporaryComponent>Sign in</TemporaryComponent>
    </HeaderStyled>
  );
}

// Styled components.
const HeaderStyled = styled.header`
  ${props => props.flex && [flexRow, justifyBetween]};
  backgorund: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.h2`
  text-align: center;
  position: absolute;
  left: 45%;
  right: 45%;
  z-index: 2;
`;

const TemporaryComponent = styled.h4`
  padding-top: 1rem;
  margin-right: 2rem;
`;

const StyledMedia = styled.ul`
  ${props => props.flex && [flexRow]}
`;

export default Header;
