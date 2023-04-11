import React from 'react';
import logo from "../OSUWMC_Logos/Horizontal Logo/White_Larger_Text_Horizontal.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const AdminNavigationBar = () => (
    <div>
        <nav className="nav navbar top-navbar justify-content-center">
            <a className="navbar-brand" href="/adminhome=4YTiwH60TL">
                <img className="nav-logo" src={logo} alt="OSU Medical Center Logo"></img>
            </a>
        </nav>
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto justify-content-left" >
                    <Nav.Link href="adminpatienteducation=cyRWLsfksP" className="nav-link bottom-nav-link mx-2">Patient Education</Nav.Link>
                    <Nav.Link href="adminvideos=ycrCjBDQCN" className="nav-link bottom-nav-link mx-2">Videos</Nav.Link>
                    <Nav.Link href="adminproviderdirectory=sGw8bmlEn8" className="nav-link bottom-nav-link mx-2">Provider Directory</Nav.Link>
                    <Nav.Link href="admincontactinformation=5UnAc6yzMP" className="nav-link bottom-nav-link mx-2">Contact Information</Nav.Link>
                    <Nav.Link href="adminfaq=gPilcl17WF" className="nav-link bottom-nav-link mx-2">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)