import React from 'react';
import styled from 'styled-components';

import Contacts from './contacts';

const Footer = styled.footer`
    text-align: center;
    padding: 2.15rem 0;
    background-color: #414362;
`;

function IndexFooter () {
    return (
        <Footer>
            <Contacts />  
        </Footer>
    )
}

export default IndexFooter;
