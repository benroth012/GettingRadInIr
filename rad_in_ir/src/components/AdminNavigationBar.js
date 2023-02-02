import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../OSUWMC_Logos/Horizontal Logo/White_Larger_Text_Horizontal.png";

export const AdminNavigationBar = () => (
    <div>
        <nav className="nav navbar top-navbar justify-content-center">
            <a className="navbar-brand" href="/adminhome=4YTiwH60TL">
                <img className="nav-logo" src={logo} alt="OSU Medical Center Logo"></img>
            </a>
        </nav>
        <nav class="navbar navbar-expand-sm bg-white">
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="adminpatienteducation=cyRWLsfksP">Patient Education</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="adminvideos=ycrCjBDQCN">Videos</a>
                </li>
            </ul>
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="adminproviderdirectory=sGw8bmlEn8">Provider Directory</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="admincontactinformation=5UnAc6yzMP">Contact Information</a>
                </li>
            </ul>
            <ul style={{ textAlign: `left` }} class="navbar-nav">
                <li class="nav-item">
                    <a className="nav-link bottom-nav-link mx-2" href="adminfaq=gPilcl17WF">FAQ</a>
                </li>
            </ul>
        </nav>
    </div>
)