import React  from 'react';
import styled from 'styled-components'; 

import { container } from '../../../Common/GlobalStyles/helpers';

import { SocialMedia, socialLinks } from '../../../Common/SocialMedia/socialMedia';
import EstateFilter from '../../../Common/EstateFilter/estateFilter';

import img from "../../../../Assets/home_bg/bridgePerspective_1290x1080.jpg";

// Define styled components.

const Welcome = styled.section`
    height: 100vh;
    ${'' /* Should fix img later */}
    background: silver url(${img}) no-repeat center;
    background-size: cover;
    color: white;
`;

const Container = styled.div`
    ${props => props.container && container};
`;

const Heading = styled.h1`
    padding-top: 5rem;
    margin-bottom: 2rem;
`;

const HomeWelcome = () => {

    return (
        <Welcome>
            <Container container>
                <Heading>
                    Ownening a home is a key stone of wealth...
                </Heading>
                <h4>
                    Both financial affluence and emotional security. If you don't
                    own a home, buy one both financial affluence and emotional security
                </h4>
                <ul>
                    <SocialMedia object={ socialLinks } />
                </ul>
                <EstateFilter />
            </Container>
        </Welcome>
    );
}

export default HomeWelcome;