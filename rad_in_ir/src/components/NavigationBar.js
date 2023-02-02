import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../OSUWMC_Logos/Horizontal Logo/White_Larger_Text_Horizontal.png";

export const NavigationBar = () => (
    <div>
        <nav className="nav navbar top-navbar justify-content-center">
            <a className="navbar-brand" href="/patienthome">
                <img className="nav-logo" src={logo} alt="OSU Medical Center Logo"></img>
            </a>
        </nav>
        <nav class="navbar navbar-expand-sm bg-white">
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="patienteducation">Patient Education</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="videos">Videos</a>
                </li>
            </ul>
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="providerdirectory">Provider Directory</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="contactinformation">Contact Information</a>
                </li>
            </ul>
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="faq">FAQ</a>
                </li>
            </ul>
        </nav>
    </div>
)