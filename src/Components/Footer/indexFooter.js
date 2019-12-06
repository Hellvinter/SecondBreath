import React from 'react';
import styled from 'styled-components';

import Contacts from './Contacts/indexContacts';

const FooterStyled = styled.footer`
    text-align: center;
    padding: 2.15rem 0;
    background-color: #414362;
`;

function Footer () {
    return (
        <FooterStyled>
            <Contacts />  
        </FooterStyled>
    )
}

export default Footer;
