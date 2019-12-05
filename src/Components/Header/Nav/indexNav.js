import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { routs } from '../../../Data/routs';
 
// Define styled components.

const Nav = styled.nav`
        width: 90%;
    `;

const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

const ListLi = styled.li`
    padding-right: 7rem;    
    border-right: 2px solid grey;
`;

function IndexNav () {

    const ListItem = (props) => {
        return (
            props.data.map(item => (
                <ListLi>
                    <Link to={item.path}>
                        {item.name}
                    </Link>
                </ListLi>
            ))
        );
    }

// When return at Krasonodar make a little experiment
// Pass ListItem sub component as child prop
// Explore this concept

    return (
        <Nav>
            <NavUl>
                <ListItem data={routs}/>
            </NavUl>
        </Nav>
    )
}

export default IndexNav