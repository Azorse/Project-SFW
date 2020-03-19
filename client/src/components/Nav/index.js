import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import "./style.css";
function TopNavbar() {

  return (
    <Navbar dark={true} >
      <Nav className="row">
        <NavItem>
          <NavLink href="/home">Harry Potter Web App</NavLink>
        </NavItem>
      </ Nav>
      <Nav className="justify-content-end">
        <NavItem>
          <NavLink href="/test">Welcome</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">LogOut</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

  );
}

export default TopNavbar;
