import React from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  flexRow,
  justifyBetween,
  justifyEvenly
} from "../../../styles/flexStyles";

import Navigation from "./navigation";
import SocialMedia from "../social_media/index";

function Header() {
  return (
    <HeaderStyled flex>
      <Navigation />
      <Logo>Fantasy worlds</Logo>
      <StyledMedia flex>
        <SocialMedia />
      </StyledMedia>
      <AuthWrapper>
        <Link href="/auth/login">
          <Auth>Sign in</Auth>
        </Link>
        <Link href="/auth/registration">
          <Auth>Create account</Auth>
        </Link>
      </AuthWrapper>
    </HeaderStyled>
  );
}

// Styled components.
const HeaderStyled = styled.header`
  ${props => props.flex && [flexRow, justifyBetween]};
  color: #fff;
`;

const Logo = styled.h2`
  text-align: center;
  position: absolute;
  left: 45%;
  right: 45%;
  z-index: 2;
`;

const AuthWrapper = styled.div`
  ${props => props.flex && [flexRow, justifyEvenly]};
`;

const Auth = styled.a`
  padding: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const StyledMedia = styled.ul`
  ${props => props.flex && [flexRow]}
`;

export default Header;
