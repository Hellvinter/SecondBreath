import React from 'react';
import styled from 'styled-components';

// Import of Global styles.
import { flexColumn, alignCenter } from '../../Common/GlobalStyles/flexStyles';
import { container } from '../../Common/GlobalStyles/helpers';

import Carousel from '../../Common/Carousel/indexCarousel';

// Define styled components.

const NewestProperty = styled.section`
    padding: 3rem 0;
`;

const Heading = styled.h2`
    margin-bottom: 1.5rem;
`;

const Container = styled.div`
    ${props => props.container && container};
    ${props => props.flex && [flexColumn, alignCenter]};
`;

function LatestProperty () {
    return (
        <NewestProperty>
            <Container container flex>
                <Heading>
                    Choce latest listet property 
                </Heading>
                <Carousel />
            </Container>
        </NewestProperty>
    );
}
export default LatestProperty