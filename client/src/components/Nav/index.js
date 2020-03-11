import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css";
function Navbar() {
  return (
    <Nav className=" navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand" href="/">
        React
      </NavLink>
      <NavItem>
        <NavLink href="#" active>Link</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
