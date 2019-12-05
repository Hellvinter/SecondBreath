import React from 'react';
import styled from 'styled-components';

import { flexRow, justifyAround} from '../Common/GlobalStyles/flexStyles';
import {SocialMedia, socialLinks} from '../Common/SocialMedia/socialMedia';

const Ul = styled.ul`
    ${props => props.flex && [flexRow, justifyAround]}
`;

function Contacts () {
    return (
        <section id='contacts'>
            <div className='container'>
                <h2>Toll free +1 (555) 555-5555</h2>
                <h3>Big House</h3>
                <Ul flex>
                    <SocialMedia object={socialLinks}/>
                </Ul>
            </div>
        </section>
        
    )
}

export default Contacts;