import React from 'react';
import logo from "../OSUWMC_Logos/Horizontal Logo/White_Larger_Text_Horizontal.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavigationBar = () => (
    <div>
        <nav className="nav navbar top-navbar justify-content-center">
            <a className="navbar-brand" href="/patienthome">
                <img className="nav-logo" src={logo} alt="OSU Medical Center Logo"></img>
            </a>
        </nav>
        <Navbar collapseOnSelect expand="lg" bg="white">  
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto justify-content-left" >
                        <Nav.Link href="patienteducation" className="nav-link bottom-nav-link mx-2">Patient Education</Nav.Link>
                        <Nav.Link href="videos" className="nav-link bottom-nav-link mx-2">Videos</Nav.Link>
                        <Nav.Link href="providerdirectory" className="nav-link bottom-nav-link mx-2">Provider Directory</Nav.Link>
                        <Nav.Link href="contactinformation" className="nav-link bottom-nav-link mx-2">Contact Information</Nav.Link>
                        <Nav.Link href="faq" className="nav-link bottom-nav-link mx-2">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
)