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
                    <p>At Archisporium, we believe that every space has the potential to tell a unique story. With a passion for creativity and an
eye for detail, we specialize in transforming ordinary interiors into extraordinary living experiences.
With years of experience and a team of talented designers, we pride ourselves on our ability to blend style, functionality,
and personality into every project we undertake. From cozy residential retreats to dynamic commercial spaces, we tailor
our designs to suit the specific needs and tastes of each client.<br/><br/>
Our approach is rooted in collaboration and communication. We work closely with our clients every step of the way,
listening to their ideas, understanding their vision, and bringing it to life with our expertise and creativity. Whether you're
looking to refresh a single room or overhaul an entire property, we're here to guide you through the process and ensure
that the end result exceeds your expectations.With a commitment to quality, integrity, and customer satisfaction, we strive to create spaces that not only look stunning
but also feel welcoming, comfortable, and uniquely yours. Discover the endless possibilities of interior design with
Archisporium Let's embark on this exciting journey together!"</p>
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