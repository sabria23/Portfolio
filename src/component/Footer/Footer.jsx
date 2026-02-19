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
                  <a
                    href="mailto:sabrina130102@gmail.com"
                    target="_blank"
                    className="targetContact"
                  >
                    <img className="contactLogo" src={mail} alt="" />
                  </a>

                  <h2 className="footer-heading">Email</h2>
                   <a
                    href="mailto:sabrina130102@gmail.com"
                    target="_blank"
                    className="footer-content"
                  >Sabrina130102@gmail.com</a>
                </div>
                
                <div className="contacts">
                  <img className="contactLogo" src={phone} alt="" />
                  <h2 className="footer-heading">Phone</h2>
                   <a
                    href="tel:+4791534532"
                    target="_blank"
                    className="footer-content"
                  >91534532</a>
                </div>

                <div className="contacts">
                  <a
                    href="https://www.linkedin.com/in/sabrina-altahrawi/"
                    target="_blank"
                  >
                    <img className="contactLogo" src={linkedin} alt="" />
                  </a>
                  
                  <h2 className="footer-heading">LinkedIn</h2>
                  <a
                    href="https://www.linkedin.com/in/sabrina-altahrawi/"
                    target="_blank"
                    className="footer-content"
                  >LinkedIn</a>
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
