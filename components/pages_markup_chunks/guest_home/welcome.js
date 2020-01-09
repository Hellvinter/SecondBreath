import React from "react";
import styled from "styled-components";

function WelcomeToFantasy() {
  return (
    <Welcome>
      <Heading>Welcome to the world of fantasy</Heading>
      <SubHeading>
        Create your own worlds or collect and manage them...
      </SubHeading>
      <CreateAccountButtonPlaceholder>
        Create your free account
      </CreateAccountButtonPlaceholder>
      <ExploreButtonPlaceHolder>Explore</ExploreButtonPlaceHolder>
    </Welcome>
  );
}

// Styled components.

// Note.
// Replace placeholders by actual functional components

const Welcome = styled.section`
  height: 100vh;
  background: #fff url("backgrounds/mountain_view_wallpapercave_com.jpg")
    center/cover no-repeat;
  color: white;
`;

const Heading = styled.h1`
  padding-top: 6rem;
  margin: 0 0 2rem 4rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SubHeading = styled.h4`
  margin-left: 4rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CreateAccountButtonPlaceholder = styled.button`
  margin-top: 4rem;
  margin-left: 4rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ed5564;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
`;

const ExploreButtonPlaceHolder = styled.button`
  display: inline-block;
  background: none;
  border: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 1rem 2rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

export default WelcomeToFantasy;
