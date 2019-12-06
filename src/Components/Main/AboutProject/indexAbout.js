import React from 'react';
import styled from 'styled-components';
import { container } from '../../Common/GlobalStyles/helpers';

const Section = styled.section`
    text-align: center;
    ${props => props.container && container}
`;

const CompletedTask = styled.p`
    text-decoration: line-through;
`;

function AboutProject () {

    return (
        <Section container> 
            <h2>About project</h2>
            <p>
                {
                    "This is a simulation of the website that offers " +
                    "a listing of recent real estate property " +
                    "available for buying it"
                }
            </p>
            <h3>Purpose</h3>
            <p>
                {
                    "This project is a long terms playground." + 
                    "The main purpose of it is to learn " + 
                    "and hone new skills " +
                    "and showcase them as well."
                }
            </p>
            <p>That single page website made by 'social media links'</p>
            <h3>Project's Todo list</h3>
            <h4>short term front-end</h4>
            <ul>
                <li>
                    Redo design of website to suit new goals
                </li>
                <li>
                    Make a basic mark up of all pages with styling
                </li>
                <li>
                    Place existing features on new places
                </li>
                <li>
                    Place other task by order and prioritet
                </li>
            </ul>
        </Section>
    )
}

export default AboutProject;