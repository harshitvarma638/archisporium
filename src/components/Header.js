import React from "react";
import "./HeaderStyles.css";

function Header() {
    return(
        <>
            <header>
                <div>
                    <div className="header-container">
                        <div className="header-content">
                            <h3>MODERN INTERIOR</h3>
                            <h1>Creating beautiful spaces for beautiful lives.</h1>
                            <p>Discover a world of creative interiors. From luxurious homes to inspiring workplaces,<br/>we bring your vision to life with quality and innovation. Let's create extraordinary spaces together.</p>
                            <button className="btn-project">Our Projects</button>
                            <button className="btn-contact">Contact Us</button>
                        </div>
                        <div className="header-img">
                            <img src="../images/bedroom2.jpg" alt="header-img"/>
                        </div>
                    </div>
                    <div className="stats-ul">
                        <ul className="stats">
                            <li>150+ <p>Projects complete</p></li>
                            <li>250+ <p>Satisfied clients</p></li>
                            <li>100+ <p>Unique Styles</p></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;