import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/header_logo.png";
import { IonIcon } from "react-ion-icon";
import { Link } from "react-router-dom";
import "./Navbars.css";
import { Outlet, useNavigate } from "react-router-dom";
const Navbars = ({ auth }) => {
  const navigate = useNavigate();
  const handleNavigateButton = (e) => {
    const target = e.target.getAttribute("href");
    navigate(`/${target}`);
  };
  return (
    <div id="Home">
      <Navbar
        collapseOnSelect
        expand="xl"
        bg="black"
        variant="dark"
        sticky="top"
      >
        <Container style={{ padddingLeft: "0" }}>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="200"
              height="100"
              alt=""
              style={{ padddingLeft: "0" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto pb-3" style={{ fontSize: "25px" }}>
              <Nav.Link
                className="navLink"
                href="#Home"
                onClick={handleNavigateButton}
              >
                Home
              </Nav.Link>
              <Nav.Link className="navLink" href="#aboutUs">
                About-us
              </Nav.Link>
              <Nav.Link className="navLink" href="#Events">
                Events
              </Nav.Link>
              <Nav.Link className="navLink" href="#Videos">
                Videos
              </Nav.Link>
              <Nav.Link className="navLink" href="#image-gallery">
                Gallery
              </Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#team">Executive Body</NavDropdown.Item>
                <NavDropdown.Item href="#eventsConducted">
                  Our Events
                </NavDropdown.Item>

                <NavDropdown.Item href="#Contact_us">
                  Contact-us
                </NavDropdown.Item>

                <Link to="/login" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
                </Link>
                {auth && (
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item href="#action/3.5">
                      Sign Up
                    </NavDropdown.Item>
                  </Link>
                )}
                {auth && (
                  <Link to="/addEvent" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item href="#action/3.5">
                      Add Event
                    </NavDropdown.Item>
                  </Link>
                )}
              </NavDropdown>
            </Nav>

            <Nav className="NavIcon">
              <Nav.Link
                className="link"
                href="https://www.youtube.com/c/EHSAASBITMESRA"
                target="_blank"
              >
                <h3>
                  <IonIcon name="logo-youtube" />
                </h3>
              </Nav.Link>
              <Nav.Link
                className="link"
                href="mailto:ehsaas@bitmesra.ac.in"
                target="_blank"
              >
                <h3>
                  <IonIcon name="mail-outline" />
                </h3>
              </Nav.Link>
              <Nav.Link
                className="link"
                href="https://www.facebook.com/ehsaasbitmesra"
                target="_blank"
              >
                <h3>
                  <IonIcon name="logo-facebook" />
                </h3>
              </Nav.Link>
              <Nav.Link
                className="link"
                href="https://www.instagram.com/ehsaas_bitm/"
                target="_blank"
              >
                <h3>
                  <IonIcon name="logo-instagram" />
                </h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbars;
