import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './index.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar sticky="top" variant="dark" bg="dark" id="navbar">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={require("./ccslogo.png")}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Cascade Cutting Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="links"href="/"><b>About CCS</b></Nav.Link>
                        <Nav.Link className="links"href="/contact"><b>Contact Us</b></Nav.Link>
                        <Nav.Link className="links"href="/services"><b>Services</b></Nav.Link>
                        <Nav.Link className="links"href="/mission"><b>Our Mission</b></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
