import React from 'react';
import styled from 'styled-components';

import {
    flexRow ,flexColumn, justifyBetween
} 
from '../Common/GlobalStyles/flexStyles';

import header from '../../Styles/layout/header.module.css';

import Logo from './logo';
import IndexLogIn from './LogIn/indexLogIn';
import IndexNav from './Nav/indexNav';

function IndexHeader () {

    const Header = styled.header`
        ${flexColumn};
    `;

    const Row = styled.div`
        ${flexRow};
        ${justifyBetween};
        ${props => props.rowOne ? ('background-color: #55b286'
        ) : (
            'background-color: #fff'
        )};
    `;
//className={header.index}
//className={
//    `${header.row} ${header.rowOneGreen}`
//}
    return (
        <Header >
            <Row rowOne>
                <Logo styles={header.logo}/>
                <IndexLogIn />
            </Row>
            <div className={header.row}>
                <IndexNav />
            </div>
        </Header>
    )
}

export default IndexHeader;