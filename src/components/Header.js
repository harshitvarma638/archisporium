import React from "react";
import "./HeaderStyles.css";
import bedroom_img from "../images/bedroom2.jpg";

function Header() {
    return(
        <>
            <header>
                <div>
                    <div className="header-container">
                        <div className="header-content">
                            <h1>Creating beautiful spaces for beautiful lives.</h1>
                            <p>Discover a world of creative interiors. From luxurious homes to inspiring workplaces,<br/>we bring your vision to life with quality and innovation. Let's create extraordinary spaces together.</p>
                            <button className="btn">Contact Us</button>
                        </div>
                        <div className="header-img">
                            <img src={bedroom_img} alt="header-img"/>
                        </div>
                    </div>
                    {/* <div className="stats-ul">
                        <ul className="stats">
                            <li>150+ Projects complete</li>
                            <li>250+ Satisfied clients</li>
                            <li>100+ Unique Styles</li>
                        </ul>
                    </div> */}
                </div>
            </header>
        </>
    );
}

export default Header;