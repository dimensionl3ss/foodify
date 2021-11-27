import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
        <NavbarBrand className="h-3" href="/">
          F O O D I F Y
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto list" navbar>
            <NavItem>
              <NavLink className="nav-link" href="/">
                BOOK A TABLE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/">
                YOUR ORDER
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Button outline color="success" size="md">
              Login
              </Button>
              </NavLink>
              
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
