import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone-call.png";
import linkedin from "../../assets/linkedin.png";
import ScrollReveal from "../../component/ScrollReveal";


export default function Footer() {
    return (
    <footer className="footer">
        <section id="footer">
             <ScrollReveal> 
                <div className="container">
                    <div className="contact"> 
                   
                                <h1 className="section-title contactTitle">Contact me</h1>
                                <hr />
                                <div className="contact-container">
                                    <div className="contacts">
                                        <a href="mailto:sabrina130102@gmail.com" target="_blank" className="targetContact">
                                            <img className="contactLogo" src={mail} alt="" />
                                        </a>
                                    
                                        <h2>Email</h2>
                                        <p>Sabrina130102@gmail.com</p>
                                    </div>
                                    <div className="contacts">
                                        <img className="contactLogo" src={phone} alt="" />
                                        <h2>Phone</h2>
                                        <p>91534532</p>
                                    </div>

                                
                                        <div className="contacts">
                                            <a href="https://www.linkedin.com/in/sabrina-altahrawi/" target="_blank">
                                                <img className="contactLogo" src={linkedin} alt="" />
                                            </a>
                                        
                                            <h2>Linkedin</h2>
                                        </div> 
                                
                        </div> 
                              
                    </div> 
                   
                <p>@copy 2025 by Sabrina Altahrawi</p>   
            </div>   
            </ScrollReveal>
        </section>
    </footer>
    );
}