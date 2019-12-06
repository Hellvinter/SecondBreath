import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flexRow, justifyAround} from '../../../Common/GlobalStyles/flexStyles';
import { commonBtn } from '../../../Common/GlobalStyles/buttonsStyles';

// Define styled components

const Invest = styled.section`
    background-color: #55b286;
    height: 5rem;
    ${props => props.flex && [flexRow, justifyAround]};
`;

const CallToAction = styled(Link)`
    ${props => props.btnCommon && commonBtn};
    text-transform: uppercase;
`;

function InvestNow () {
    return (
        <Invest flex>
            <h3>
                Want to start gain wealth?
            </h3>
            <CallToAction
                btnCommon
                to={'/'}>
                Invest now
            </CallToAction>
        </Invest>
    );
}

export default InvestNow;