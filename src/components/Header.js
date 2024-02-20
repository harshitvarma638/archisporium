import React from "react";
import "./HeaderStyles.css";
import {Link} from "react-router-dom";


function Header() {
    return(
        <>
            <header>
                <div className="box">
                    <div className="header-container intro">
                        <div className="header-content">
                            <h3>MODERN INTERIOR</h3>
                            <h1>Creating beautiful spaces for beautiful lives.</h1>
                            <p>Discover a world of creative interiors. From luxurious homes to inspiring workplaces,<br/>we bring your vision to life with quality and innovation. Let's create extraordinary spaces together.</p>
                            <button className="btn-project"><Link to="/projects" className="link-style">Our Projects</Link></button>
                            <button className="btn-contact"><Link to="/contact" className="link-style">Contact Us</Link></button>
                        </div>
                    </div>
                    <div className="header-img intro-img">
                            <img src="../images/bedroom2.jpg" alt="header-img"/>
                    </div>
                    <div className="stats-ul nums">
                        <div className="numbers">
                            <ul className="stats">
                                <li className="col-lg-4 col-md-4 col-md-4">150+ <p>Projects<br/>complete</p></li>
                                <li className="col-lg-4 col-md-4 col-md-4">250+ <p>Satisfied<br/>clients</p></li>
                                <li className="col-lg-4 col-md-4 col-md-4">100+ <p>Unique<br/>Styles</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;