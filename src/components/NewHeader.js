import React, { useState, useEffect } from 'react';
import './NewHeader.css'; 
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';

const images = ['../images/ajit-sahoo-villa/11.png', '../images/2(Residential)/1.jpg',"../images/ajit-sahoo-villa/23.png",'../images/2(Residential)/7.jpg']; // Add your image URLs here

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-header">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="type-writer">
          <Typewriter
            options={{
              loop: true,
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Designing Timeless Spaces: <br>Where Comfort Meets Style')
                .pauseFor(2000)
                .deleteChars(26) // Delete characters up to ":"
                .typeString(' <br>Where Beauty is Defined')
                .pauseFor(2000)
                .deleteChars(24) // Delete characters up to ":"
                .typeString(' <br>Where Luxury Feels Like Home')
                .pauseFor(2000)
                .deleteAll() // Delete all text
                .start(); 
            }}
            
          />
          <button className="contact-btn"><Link to="/contact" className="link-style">Contact Us</Link></button>
      </div>
    </div>
  );
}

export default Carousel;
