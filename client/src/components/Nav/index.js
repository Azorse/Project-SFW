import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import "./style.css";
function TopNavbar(props) {

  return (
    <Navbar dark={true} >
      <Nav className="row">
        <NavItem>
          <NavLink href="/home">Harry Potter Web App</NavLink>
        </NavItem>
      </ Nav>
      <Nav className="justify-content-end">
        <NavItem {...props}>
          <NavLink href="/test">Welcome, {props.firstName}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">LogOut</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

  );
}

export default TopNavbar;
