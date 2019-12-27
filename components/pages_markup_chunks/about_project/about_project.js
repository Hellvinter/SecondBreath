import React from "react";
import styled from "styled-components";
import { container } from "../../../reusable_styles/helpers";

import {
  aboutProject,
  genericTodos,
  generalStylesTodos,
  homeTodos,
  realEstateTodos,
  stockMarketTodos,
  aboutTodos
} from "./about_info";

import Todo from "../../common/todo/todo";

function AboutProject() {
  // Bind imported info to constans.
  const about = aboutProject.about;
  const purpose = aboutProject.purpose;
  const genericTodo = genericTodos;
  const genealStyles = generalStylesTodos;
  const home = homeTodos;
  const realEstate = realEstateTodos;
  const stockMarket = stockMarketTodos;
  const aboutTodo = aboutTodos;

  return (
    <Section container>
      <h2>About project</h2>
      <p>{about}</p>
      <h3>Purpose</h3>
      <p>{purpose}</p>
      <h3>Project's Todo list</h3>
      <Todo data={genericTodo} heading="Generic todos" />
      <Todo data={genealStyles} heading="Generic styles todos" />
      <Todo data={home} heading="Home todos" />
      <Todo data={realEstate} heading="Real estate todos" />
      <Todo data={stockMarket} heading="Stock market todos" />
      <Todo data={aboutTodo} heading="About todos styles todos" />
    </Section>
  );
}

// Styled components.
const Section = styled.section`
  text-align: center;
  ${props => props.container && container}
`;

export default AboutProject;
