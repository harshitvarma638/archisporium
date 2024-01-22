import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import ReactDOM from 'react-dom';
import logo from "../images/logo.svg";
import "./NavbarStyles.css";


function Navbar() {
    const [isClicked,setIsClicked] = useState('false');
    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    }
    return(
        <>
            <nav>
                <a href="#" className="nav-logo" title="Logo-of-company"><img src={logo} alt="logo" width="170px" height="90px"/></a>
                <div>
                    <ul id="navbar" className={isClicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                

                <div id="mobile" onClick={handleClick}>
                    <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
