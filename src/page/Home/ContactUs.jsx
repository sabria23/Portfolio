import React from "react";

import "./CSS/ContactUs.css";

import mail from "../../assets/brand/mail.png";
import phone from "../../assets/brand/phone-call.png";
import linkedin from "../../assets/brand/linkedin.png";

import ScrollReveal from "../../component/ScrollReveal";

import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <section id="contact">

      <ScrollReveal>

        <div className="container">

          <div className="contact">

            <h1 className="section-title contact-title">
              {t("contact.title")}
            </h1>

            <hr />

            <div className="contact-container">

              <div className="contact-item">

                <a
                  href="mailto:sabrina130102@gmail.com"
                  className="contact-link"
                >
                  <img
                    className="contact-icon"
                    src={mail}
                    alt="Email icon"
                  />
                </a>

                <h2 className="contact-heading">
                  {t("contact.email")}
                </h2>

                <a
                  href="mailto:sabrina130102@gmail.com"
                  className="contact-text"
                >
                  Sabrina130102@gmail.com
                </a>

              </div>

              <div className="contact-item">

                <img
                  className="contact-icon"
                  src={phone}
                  alt="Phone icon"
                />

                <h2 className="contact-heading">
                  {t("contact.phone")}
                </h2>

                <a
                  href="tel:+4791534532"
                  className="contact-text"
                >
                  +47 915 34 532
                </a>

              </div>

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

                <h2 className="contact-heading">
                  {t("contact.linkedin")}
                </h2>

                <a
                  href="https://www.linkedin.com/in/sabrina-altahrawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text"
                >
                  {t("contact.connectLinkedin")}
                </a>

              </div>

            </div>

          </div>

        </div>

      </ScrollReveal>

    </section>
  );
}