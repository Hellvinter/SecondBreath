import React from "react";
import styled from "styled-components";

// Styled components.

const CompletedTask = styled.p`
  text-decoration: line-through;
`;

function TodoMarkup(props) {
  return (
    <TodoUl>
      <TodoHeading>{props.heading}</TodoHeading>
      {props.data.map((item, i) => (
        <TodoLi key={i}>{item}</TodoLi>
      ))}
    </TodoUl>
  );
}

const TodoUl = styled.ul`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
`;

const TodoHeading = styled.h4`
  text-align: center;
`;

const TodoLi = styled.li``;

export default TodoMarkup;
