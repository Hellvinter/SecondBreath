import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { flexRow, justifyStart } from "../../../styles/flexStyles";

const routs = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" }
];
const ListItem = props => {
  return props.data.map(item => (
    <NavLi>
      <Link href={item.href}>
        <LiLink>{item.label}</LiLink>
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

const Nav = styled.nav`
  width: 55%;
  padding: 0.5rem 2rem;
`;
//background-color: inherit;
const NavUl = styled.ul`
  ${props => props.flex && [flexRow, justifyStart]}
  list-style: none;
`;

const NavLi = styled.li`
  padding-right: 3rem;
  cursor: pointer;
`;

const LiLink = styled.a`
  color: #fff;
`;

export default Navigation;
