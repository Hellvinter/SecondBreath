import React from "react";
import styled from "styled-components";
import { container } from "../../styles/helpers";

import {
  aboutProject,
  genericTodos,
  generalStylesTodos,
  homeTodos,
  aboutTodos
} from "./about_info";

import Todo from "../generic_components/todo/todo";

function AboutProject() {
  // Bind imported info to constans.
  const about = aboutProject.about;

  const genericTodo = genericTodos;
  const genealStyles = generalStylesTodos;
  const home = homeTodos;
  const aboutTodo = aboutTodos;

  return (
    <Section container>
      <MainHeading>About project</MainHeading>
      <Paragraph>{about}</Paragraph>
      <Heading>Project's Todo list</Heading>
      <TodosWrapper>
        <Todo data={genericTodo} heading="Generic todos" />
        <Todo data={genealStyles} heading="Generic styles todos" />
        <Todo data={home} heading="Home todos" />
        <Todo data={aboutTodo} heading="About todos styles todos" />
      </TodosWrapper>
    </Section>
  );
}

// Styled components.
const Section = styled.section`
  height: 100vh;
  text-align: center;
  ${props => props.container && container}
`;

const MainHeading = styled.h2`
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  font-weight: 400;
`;

const Heading = styled.h3`
  margin-top: 2rem;
`;

const TodosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export default AboutProject;
