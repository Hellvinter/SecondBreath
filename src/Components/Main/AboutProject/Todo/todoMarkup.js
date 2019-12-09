import React from 'react';
import styled from 'styled-components';

// Declaier styled components.

const TodoUl = styled.ul``;

const TodoLi = styled.li``;

const CompletedTask = styled.p`
    text-decoration: line-through;
`;


function TodoMarkup (props) {
    return (
        <ul>
            <h4>{props.heading}</h4>
            {props.data.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

export default TodoMarkup;