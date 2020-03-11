import React from "react";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from "reactstrap";
import "./style.css";
function TopNavbar() {
  return (
    <Navbar expand="lg" dark={true}>
      <NavbarBrand href="/">React</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="#" active>
            Link
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default TopNavbar;
