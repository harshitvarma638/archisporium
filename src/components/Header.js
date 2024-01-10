import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import ReactDOM from 'react-dom';
import "./NavbarStyles.css";

function Header() {
    const [isClicked,setIsClicked] = useState('false');
    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    }
    return(
        <>
            <nav>
                <a href="logo.png" className="nav-logo"></a>
                <div>
                    <ul id="navbar" className={isClicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                <a href="#" className="nav-contact">
                    Contact Us
                </a>

                <div id="mobile" onClick={handleClick}>
                    <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}

export default Header;
