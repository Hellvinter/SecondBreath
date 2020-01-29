import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { flexRow, justifyStart } from "../../../styles/flexStyles";

const routs = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" }
];
const ListItem = props => {
  return props.data.map(item => (
    <NavLi>
      <Link href={item.href}>
        <a>{item.label}</a>
      </Link>
    </NavLi>
  ));
};

function Navigation() {
  return (
    <Nav>
      <NavUl flex>
        <ListItem data={routs} />
      </NavUl>
    </Nav>
  );
}

// Styled components.

// later remove width from Nav
const Nav = styled.nav`
  width: 55%;
  padding: 0 2rem;
`;

const NavUl = styled.ul`
  ${props => props.flex && [flexRow, justifyStart]}
  list-style: none;
`;

const NavLi = styled.li`
  padding-right: 3rem;
  color: #000;
`;

export default Navigation;
