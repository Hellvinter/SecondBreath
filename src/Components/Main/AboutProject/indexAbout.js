import React from 'react';
import styled from 'styled-components';
import { container } from '../../Common/GlobalStyles/helpers';

import { aboutProject, genericTodos, generalStylesTodos } from './info';

import AboutMarkup from './aboutMarkup';
import Todo from './Todo/indexTodo';

const Section = styled.section`
    text-align: center;
    ${props => props.container && container}
`;

function AboutProject () {
    
    // Info vagiables.
    let about = aboutProject.about;
    let purpose = aboutProject.purpose;
    let genericTodo = genericTodos;
    let genealStyles = generalStylesTodos;

    return (
        <Section container> 
            <AboutMarkup about={about} purpose={purpose}/>
            <Todo heading="Generic todos" data={genericTodo}/> 
            <Todo heading ="Generic styles todos" data={genealStyles}/>
        </Section>
    )
}

export default AboutProject;