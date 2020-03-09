import React from "react";
import styled from "styled-components";

function UserDashboard() {
  return (
    <Main>
      <Heading>You are logged to dashboard page</Heading>
      <p>only authinticated users can see that page</p>
    </Main>
  );
}

const Main = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2``;

export default UserDashboard;
