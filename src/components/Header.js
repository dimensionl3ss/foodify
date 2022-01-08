import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Modal,
  Input,
  Label,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleLogin = (event) => {
    toggleModal();
    props.loginUser({ email: email, password: password });
    event.preventDefault();
  };

  const handleLogout = () => {
    props.logoutUser();
  };

  return (
    <div className="header" style={{ backgroundImage: `url("http://localhost:9000/images/header.jpg")` }}>
      <Navbar light expand="md">
        <NavbarToggler style={{backgroundColor: 'white'}} onClick={toggle} />
        <NavbarBrand className="mr-auto" href="/home">
          F O O D I F Y
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                className="nav-link"
                to="/aboutus"
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                className="nav-link"
                to="/menu"
              >
                MENU
              </NavLink>
            </NavItem>
            {props.auth.isAuthenticated ?
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                className="nav-link"
                to="/favorites"
              >
                My Favorites
              </NavLink>
            </NavItem>
            : null}
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                className="nav-link"
                to="/contactus"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {!props.auth.isAuthenticated ? (
              <Button color="danger" onClick={toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
                {props.auth.isLoading ? (
                  <span className="fa fa-spinner fa-pulse fa-fw"></span>
                ) : null}
              </Button>
            ) : (
              <div>
                <span style={{ color: "white" }} className="navbar-text mr-3">
                  {props.auth.user.email.substr(
                    0,
                    props.auth.user.email.indexOf("@")
                  ) + " "}
                </span>
                <Button color="danger" onClick={handleLogout}>
                  <span className="fa fa-sign-out fa-lg"></span> Logout
                  {props.auth.isFetching ? (
                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                  ) : null}
                </Button>
              </div>
            )}
          </NavItem>
        </Nav>
      </Navbar>
      <hr />

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" value="submit" color="danger">
              Login
            </Button>
            <span style={{ padding: "2%" }}> Don't have an account ?</span>
            <span>
              <NavLink
                style={{ textDecoration: "none" }}
                type="submit"
                value="submit"
                color="danger"
                to='/signUp'
                onClick={toggleModal}
              >
                Register
              </NavLink>
            </span>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Header;
