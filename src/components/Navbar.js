import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "./NavbarStyles.css";


function Navbar() {
    const [isClicked,setIsClicked] = useState('false');
    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    }
    return(
        <>
            <nav>
                <Link to="/" className="nav-logo" title="Logo-of-company"><img src="../images/logo.svg" alt="logo" width="170px" height="90px"/></Link>
                <div>
                    <ul id="navbar" className={isClicked ? "#navbar active" : "#navbar"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
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
