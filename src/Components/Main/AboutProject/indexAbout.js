import React from 'react';
import styled from 'styled-components';
import { container } from '../../Common/GlobalStyles/helpers';

import { aboutProject, shortFrontTodo } from './info';

import AboutMarkup from './aboutMarkup';
import Todo from './Todo/indexTodo';

const Section = styled.section`
    text-align: center;
    ${props => props.container && container}
`;

function AboutProject () {
    
    let about = aboutProject.about;
    let purpose = aboutProject.purpose;
    let shortTermFront = shortFrontTodo;

    return (
        <Section container> 
            <AboutMarkup about={about} purpose={purpose}/>
            <Todo 
                heading='Short terms todo' 
                data={shortTermFront} 
            /> 
        </Section>
    )
}

export default AboutProject;