import React from "react";
import styled from "styled-components";

import { flexRow, justifyAround } from "../../Common/GlobalStyles/flexStyles";
import { container } from "../../Common/GlobalStyles/helpers";
import { SocialMedia, socialLinks } from "../../Common/SocialMedia/socialMedia";

const Ul = styled.ul`
  ${props => props.flex && [flexRow, justifyAround]}
`;

const Container = styled.div`
  ${props => props.container && container}
`;

function Contacts() {
  return (
    <section>
      <Container container>
        <h2>Toll free +1 (555) 555-5555</h2>
        <h3>Big House</h3>
        <Ul flex>
          <SocialMedia object={socialLinks} />
        </Ul>
      </Container>
    </section>
  );
}

export default Contacts;
