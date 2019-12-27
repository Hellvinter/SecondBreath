import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { routs } from "../../../../data/routs";
import { container } from "../../../../reusable_styles/helpers";

function Navigation() {
  const ListItem = props => {
    return props.data.map(item => (
      <NavLi>
        <Link href={item.path}>
          <a>{item.name}</a>
        </Link>
      </NavLi>
    ));
  };

  return (
    <Nav container>
      <NavUl>
        <ListItem data={routs} />
      </NavUl>
    </Nav>
  );
}

// Styled components.

const Nav = styled.nav`
  ${props => props.container && container}
  width: 90%;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const NavLi = styled.li`
  padding-right: 2rem;
  color: #fff;
`;

export default Navigation;
