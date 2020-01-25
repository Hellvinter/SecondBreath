import React from "react";
import Link from "next/link";
import styled from "styled-components";

function WelcomeToFantasy() {
  return (
    <Welcome>
      <Heading>Welcome to the world of fantasy</Heading>
      <SubHeading>
        Create your own worlds or collect and manage them...
      </SubHeading>
      <Link href="auth/registration">
        <CreateAccountLink>
          <a>Create your free account</a>
        </CreateAccountLink>
      </Link>
    </Welcome>
  );
}

// Styled components.

// Note.
// Replace placeholders by actual functional components

const Welcome = styled.section`
  height: 100vh;
  background: #fff
    url("backgrounds/welcome/mountain_view_wallpapercave_com.jpg") center/cover
    no-repeat;
  color: white;
`;

const Heading = styled.h1`
  padding-top: 6rem;
  margin: 0 0 2rem 4rem;
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

const SubHeading = styled.h4`
  margin-left: 4rem;
  text-shadow: 0px 4px 4px rgba(43, 43, 43, 0.25);
`;

const CreateAccountLink = styled.button`
  margin-top: 4rem;
  margin-left: 4rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ed5564;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
`;

export default WelcomeToFantasy;
