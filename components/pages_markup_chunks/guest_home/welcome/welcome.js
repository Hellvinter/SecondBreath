import React from "react";
import styled from "styled-components";

import { container } from "../../../../reusable_styles/helpers";

function WelcomeToFantasy(props) {
  return (
    <Welcome>
      <Heading>Welcome to the world of fantasy</Heading>
      <SubHeading>
        Create your own worlds or collect and manage them...
      </SubHeading>
    </Welcome>
  );
}

// Styled components.

const Welcome = styled.section`
  height: 100vh;
  background: #fff
    url("/static/backgrounds/mountain_view_wallpapercave_com.jpg") center/cover
    no-repeat;
  color: white;
`;

const Heading = styled.h1`
  padding-top: 5rem;
  margin: 0 0 2rem 4rem;
`;

const SubHeading = styled.h4`
  margin-left: 4rem;
`;

export default WelcomeToFantasy;
