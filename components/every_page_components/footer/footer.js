import React from "react";
import styled from "styled-components";

import { flexRow, justifyAround } from "../../../styles/flexStyles";
import { container } from "../../../styles/helpers";
import SocialMedia from "../social_media/social_media";

function Footer() {
  return (
    <FooterStyled>
      <Container container>
        <h3>Fantasy worlds</h3>
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

const Ul = styled.ul`
  ${props => props.flex && [flexRow, justifyAround]}
`;

export default Footer;
