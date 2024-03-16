import React from "react";
import "./AboutStyles.css";

function About() {
    return(
        <>
            <div className="box2">
                <div className="about-img">
                    <img src="../images/kitchen3.jpg" alt="about"/>
                </div>
                <div className="about_us">
                    <h1>About Us</h1>
                    <p>There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form injected
    humour, or randomised words which don't look even slightly
    believable.If you are going to use a passage of Lorem Ipsum,
    sure there isn't anything embarrassing hidden the middleof text.
    All the Lorem Ipsum generators on the Internettend to repeat
    predefined chunks as necessary,making this the first true
    generator on the Internet.Ipsum generators on the Internettend to repeat
    predefined chunks as necessary,making this the first true
    generator on the Internet.</p>
                </div>
            </div>
            <div className="box3">
                <div className="experience">
                    <h1>15</h1>
                    <h2>Years Of Successful<br/>Working in<br/>The Market</h2>
                </div>
                <div className="experience-img">
                    <img src="../images/living_area.jpg" alt="about2"/>
                </div>
            </div>
        </>
    );
}

export default About;