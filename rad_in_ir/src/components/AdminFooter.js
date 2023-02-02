import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../OSUWMC_Logos/Horizontal Logo/Gray_Horizontal.png";

export const AdminFooter = () => (
    <div>
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <a href="/adminhome=4YTiwH60TL">
                        <img style={{ width: `100%`, height: `auto`}} className="footer-logo" src={logo} alt="OSU Medical Center Logo"></img>
                    </a>
                    <p className="gray-text copyright-text">Copyright © 2021 The Ohio State University Wexner Medical Center</p>
                    <p className="font-weight-bold text-uppercase"><a href="/" className="footer-c">Admin Sign Out</a></p>
                </div>

                <div className="col">
                    <p className="font-weight-bold text-uppercase gray-text">Patient Care</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="adminpatienteducation=cyRWLsfksP" className="footer-a">Patient Education</a>
                        </li>
                        <li>
                            <a href="adminvideos=ycrCjBDQCN" className="footer-a">Videos</a>
                        </li>
                        <li>
                            <a href="adminfaq=gPilcl17WF" className="footer-a">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <p className="font-weight-bold text-uppercase gray-text">About Us</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="adminproviderdirectory=sGw8bmlEn8" className="footer-a">Provider Directory</a>
                        </li>
                        <li>
                            <a href="admincontactinformation=5UnAc6yzMP" className="footer-a">Contact Information</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
)