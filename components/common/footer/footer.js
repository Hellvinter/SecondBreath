import React from "react";
import styled from "styled-components";

import { flexRow, justifyAround } from "../../../reusable_styles/flexStyles";
import { container } from "../../../reusable_styles/helpers";
import { SocialMedia, socialLinks } from "../social_media/social_media";

function Footer() {
  return (
    <FooterStyled>
      <Container container>
        <h2>Toll free +1 (555) 555-5555</h2>
        <h3>Big House</h3>
        <Ul flex>
          <SocialMedia object={socialLinks} />
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
