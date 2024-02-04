import React from "react";
import "./AboutStyles.css";
import about_img from "../images/kitchen3.jpg";
import about_img2 from "../images/living_area.jpg";


function About() {
    return(
        <>
            <div className="about-us">
                <img src={about_img} alt="about"/>
                <h1>About Us</h1>
                <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form injected
humour, or randomised words which don't look even slightly
believable.If you are going to use a passage of Lorem Ipsum,
sure there isn't anything embarrassing hidden the middleof text.
All the Lorem Ipsum generators on the Internettend to repeat
predefined chunks as necessary,making this the first true
generator on the Internet.</p>
                <button className="read-more">Read More</button>
            </div>
            <div className="experience">
                <h1>16</h1>
                <h2>Years Of Successful<br/>Working in<br/>The Market</h2>
                <img src={about_img2} alt="about2" width="500px" height="475px"/>
            </div>
        </>
    );
}

export default About;