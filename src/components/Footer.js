import React from 'react';
import logo from "../images/logo.svg";
import "./FooterStyles.css";

function Footer() {
  return (
    <>  
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-5 col-12 ft-1">
                        <img src={logo} alt = "logo" width="230px" height="150px"></img>
                        <div className="footer-icon">
                            <h4>Follow Us</h4>
                            <i className="fa-brands fa-facebook fa-2x"></i>
                            <i className="fa-brands fa-instagram fa-2x"></i>
                            <i className="fa-brands fa-youtube fa-2x"></i>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-12 ft-2">
                        <h4>Quick Links</h4>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About our Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Our Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-12 ft-3">
                        <h4>Contact Info</h4>
                        <p><i class="fa-solid fa-phone-volume"></i> 8095933343</p>
                        <p><i class="fa-solid fa-envelope"></i> rajeshkumarsaran20@gmail.com</p>
                        <p><i class="fa-solid fa-address-book"></i> Archisporium Pvt. Ltd.<br/>2nd Floor,Post office building,<br/>Bilekahalli,Bangalore-76</p>
                    </div>
                </div>
            </div>
            <div className="ft-4">
                <p>@Copyright 2024. All Rights Reserved by <b>Archisporium</b></p>
            </div>
        </div>
        
    </>
  );
}

export default Footer;
