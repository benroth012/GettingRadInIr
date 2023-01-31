//
//
//
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../OSUWMC_Logos/Horizontal Logo/Gray_Horizontal.png";

export const Footer = () => (
    <div>
        <div className="container p-4">
            <div className="row">
                <div className="col">
                    <a href="/">
                        <img style={{ width: '100%', height: `auto`}} className="footer-logo" src={logo} alt="OSU Medical Center Logo"></img>
                    </a>
                    <p className="gray-text copyright-text">Copyright © 2021 The Ohio State University Wexner Medical Center</p>
                    <p className="font-weight-bold text-uppercase"><a href="adminlogin" className="footer-c">Admin</a></p>
                </div>

                <div className="col">
                    <p className="font-weight-bold text-uppercase gray-text">Patient Care</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="patienteducation" className="footer-a">Patient Education</a>
                        </li>
                        <li>
                            <a href="videos" className="footer-a">Videos</a>
                        </li>
                        <li>
                            <a href="faq" className="footer-a">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <p className="font-weight-bold text-uppercase gray-text">About Us</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="providerdirectory" className="footer-a">Provider Directory</a>
                        </li>
                        <li>
                            <a href="contactinformation" className="footer-a">Contact Information</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)