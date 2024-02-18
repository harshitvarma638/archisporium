import React from "react";
import "./ContactStyles.css";

export default function Contact() {
    return (
        <div className="contact-us">
            <div className="title">
                <h2>Get in Touch</h2>
            </div>
            <div className="box">
                <div className="contact form">
                    <h3>Send a Message</h3>
                    <form>
                        <div className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>First Name</span>
                                    <input type="text" name="" required />
                                </div>
                                <div className="inputBox">
                                    <span>Last Name</span>
                                    <input type="text" name="" required />
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="text" name="" required />
                                </div>
                                <div className="inputBox">
                                    <span>Mobile</span>
                                    <input type="text" name="" required />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Message</span>
                                    <textarea required placeholder="Write your message here"></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact info">
                    <h3>Contact Info</h3>
                    <div className="infoBox">
                        <div>
                            <span><i class="fa-solid fa-address-book"></i></span>
                            <p>2nd Floor,Post office building,<br/>
Bilekahalli,Bangalore-76</p>
                        </div>
                        <div>
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <a href="mailto:rajeshkumarsaran20@gmail.com">rajeshkumarsaran20@gmail.com</a>
                        </div>
                        <div>
                            <span><i class="fa-solid fa-phone-volume"></i></span>
                            <a href="tel:+918095933343">+91 809 593 3343</a>
                        </div>
                        <ul class="sci">
                            <li><i className="fa-brands fa-facebook fa-2x"></i></li>
                            <li><i className="fa-brands fa-instagram fa-2x"></i></li>
                            <li><i className="fa-brands fa-youtube fa-2x"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="contact map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.667876533873!2d77.59531519054293!3d12.89698291509726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d944198021%3A0xa38bbf0fa29128b0!2sBilekahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708049253201!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}