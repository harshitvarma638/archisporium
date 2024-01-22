import React from 'react';
import logo from "../images/logo.svg"

function Footer() {
  return (
    <footer>
        <img src={logo} alt = "logo" width="300px" height="200px"></img>
        <div>
            <h1>Quick Links</h1>
            <p>About our Company</p>
            <p>Our Services</p>
            <p>Contact Us</p>
        </div>
        <div>
            <h1>Company</h1>
            <p>About Company</p>
            <p>Our Testimonials</p>
            <p>Latest News</p>
        </div>
        <div>
            <h1>Contact Us</h1>
            <p>Archisporium Pvt. Ltd.
2nd Floor,Post office building,
Bilekahalli,Bangalore-76
Email - rajeshkumarsaran20@gmail.com
Phone No - 8095933343</p>
        </div>
        <div>
            <h1>Follow Us</h1>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Instagram</p>
        </div>
    </footer>
  );
}

export default Footer;