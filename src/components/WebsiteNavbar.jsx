import { Navbar, Container, Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/navbar.css";
import "../assets/styles/main.css";
import logo from "../assets/img/logo.png";

const WebsiteNavbar = () => {
  const location = useLocation();
  const isActivePage = (pathname) => location.pathname === pathname;

  return (
    <Navbar bg="white" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="mx-5">
              <Link to="/chat" style={{ textDecoration: "none" }}>
                <h4
                  className={
                    isActivePage("/chat")
                      ? "fw-bold text-secondary"
                      : "fw-bold text-primary"
                  }
                >
                  Optibot
                </h4>
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-5">
              <Link to="/objectives" style={{ textDecoration: "none" }}>
                <h4
                  className={
                    isActivePage("/objectives")
                      ? "fw-bold text-secondary"
                      : "fw-bold text-primary"
                  }
                >
                  Objectives
                </h4>
              </Link>
            </Nav.Item>
            <Nav.Item className="mx-5">
              <Link to="/focus" style={{ textDecoration: "none" }}>
                <h4
                  className={
                    isActivePage("/focus")
                      ? "fw-bold text-secondary"
                      : "fw-bold text-primary"
                  }
                >
                  Focus
                </h4>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WebsiteNavbar;
