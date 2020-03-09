import React from "react";
import styled from "styled-components";

import { flexRow, justifyAround } from "../../../styles/flexStyles";
import { container } from "../../../styles/helpers";
import SocialMedia from "../social_media/index";

function Footer() {
  return (
    <FooterStyled>
      <Container container>
        <Heading>Fantasy worlds</Heading>
        <Ul flex>
          <SocialMedia />
        </Ul>
      </Container>
    </FooterStyled>
  );
}

// Styled components.

const FooterStyled = styled.footer`
  text-align: center;
  padding: 2.15rem 0;
  background-color: inherit;
`;

const Container = styled.div`
  ${props => props.container && container}
`;

const Heading = styled.h3`
  color: #fff;
`;

const Ul = styled.ul`
  ${props => props.flex && [flexRow, justifyAround]}
`;

export default Footer;
