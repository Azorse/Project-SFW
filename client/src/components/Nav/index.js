import React from "react";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from "reactstrap";
import "./style.css";
function TopNavbar() {
  return (
    <Navbar expand="lg" dark={true}>
      <NavbarBrand href="/">Harry Potter Web App</NavbarBrand>
      <Nav className="float-right" navbar>
        <NavItem>
          <NavLink href="/" active>
            LogOut
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>

  );
}

export default TopNavbar;
