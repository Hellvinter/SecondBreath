import React from "react";
import styled from "styled-components";

import { container } from "../../../../reusable_styles/helpers";

import {
  SocialMedia,
  socialLinks
} from "../../../common/social_media/social_media";

function HomeWelcome(props) {
  return (
    <Welcome className={props.className}>
      <Container container>
        <Heading>Ownening a home is a key stone of wealth...</Heading>
        <h4>
          Both financial affluence and emotional security. If you don't own a
          home, buy one both financial affluence and emotional security
        </h4>
        <ul>
          <SocialMedia object={socialLinks} />
        </ul>
      </Container>
    </Welcome>
  );
}

// Styled components.

const Welcome = styled.section`
  height: 100vh;
  background-color: inherit;
  color: white;
`;

const Container = styled.div`
  ${props => props.container && container};
`;

const Heading = styled.h1`
  padding-top: 5rem;
  margin-bottom: 2rem;
`;

export default HomeWelcome;
