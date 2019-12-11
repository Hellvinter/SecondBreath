import React from "react";
import styled from "styled-components";
import { container } from "../../Common/GlobalStyles/helpers";

import {
  aboutProject,
  genericTodos,
  generalStylesTodos,
  homeTodos,
  realEstateTodos,
  stockMarketTodos,
  aboutTodos
} from "./info";

import AboutMarkup from "./aboutMarkup";
import Todo from "./Todo/indexTodo";

// Styled components.
const Section = styled.section`
  text-align: center;
  ${props => props.container && container}
`;

function AboutProject() {
  // Info const.
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
      <AboutMarkup about={about} purpose={purpose} />
      <Todo data={genericTodo} heading="Generic todos" />
      <Todo data={genealStyles} heading="Generic styles todos" />
      <Todo data={home} heading="Home todos" />
      <Todo data={realEstate} heading="Real estate todos" />
      <Todo data={stockMarket} heading="Stock market todos" />
      <Todo data={aboutTodo} heading="About todos styles todos" />
    </Section>
  );
}

export default AboutProject;
