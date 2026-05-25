import React from "react";
import "./CSS/ContactUs.css";
import mail from "../../assets/brand/mail.png";
import phone from "../../assets/brand/phone-call.png";
import linkedin from "../../assets/brand/linkedin.png";
import ScrollReveal from "../../component/ScrollReveal";

export default function ContactUs() {
  return (
    <section id="contact">
      <ScrollReveal>
        <div className="container">
          <div className="contact">
            <h1 className="section-title contact-title">Get in touch</h1>
            <hr />

            <div className="contact-container">
              {/* Email */}
              <div className="contact-item">
                <a
                  href="mailto:sabrina130102@gmail.com"
                  className="contact-link"
                >
                  <img className="contact-icon" src={mail} alt="Email icon" />
                </a>
                <h2 className="contact-heading">Email</h2>
                <a
                  href="mailto:sabrina130102@gmail.com"
                  className="contact-text"
                >
                  Sabrina130102@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <img className="contact-icon" src={phone} alt="Phone icon" />
                <h2 className="contact-heading">Phone</h2>
                <a href="tel:+4791534532" className="contact-text">
                  +47 915 34 532
                </a>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <a
                  href="https://www.linkedin.com/in/sabrina-altahrawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="contact-icon"
                    src={linkedin}
                    alt="LinkedIn icon"
                  />
                </a>
                <h2 className="contact-heading">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/sabrina-altahrawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
