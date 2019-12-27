import React from "react";
import styled from "styled-components";

// Styled components.

const TodoUl = styled.ul``;

const TodoLi = styled.li``;

const CompletedTask = styled.p`
  text-decoration: line-through;
`;

function TodoMarkup(props) {
  return (
    <TodoUl>
      <h4>{props.heading}</h4>
      {props.data.map((item, i) => (
        <TodoLi key={i}>{item}</TodoLi>
      ))}
    </TodoUl>
  );
}

export default TodoMarkup;
