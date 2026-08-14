import React from "react";
import "./CSS/About.css";

import ScrollReveal from "../../component/ScrollReveal";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">

      <ScrollReveal>

        <div className="container">

          <div className="contact-content">

            <h2 className="section-title">
              {t("about.title")}
            </h2>

            <div>

              <p className="about-role">
                {t("about.role")}
              </p>

              <p className="about-description">
                {t("about.description")}
              </p>

              <section className="para-container">

                <article className="about-card">
                  <h2>
                    {t("about.creative.title")}
                  </h2>

                  <div>
                    <p>
                      {t("about.creative.text")}
                    </p>

                    <p>
                      {t("about.creative.secondText")}
                    </p>
                  </div>
                </article>

                <article className="about-card">
                  <h2>
                    {t("about.passionate.title")}
                  </h2>

                  <p>
                    {t("about.passionate.text")}
                  </p>
                </article>

                <article className="about-card">
                  <h2>
                    {t("about.collaborative.title")}
                  </h2>

                  <p>
                    {t("about.collaborative.text")}
                  </p>
                </article>

              </section>

            </div>

          </div>

          <section className="education">

            <h2 className="education-title">
              {t("about.education.title")}
            </h2>

            <article className="education-card">

              <div className="education-item">

                <div className="education-header">

                  <h3>
                    {t(
                      "about.education.interactionDesign.title"
                    )}
                  </h3>

                  <span className="education-period">
                    {t(
                      "about.education.interactionDesign.period"
                    )}
                  </span>

                </div>

                <p className="education-location">
                  {t(
                    "about.education.interactionDesign.location"
                  )}
                </p>

                <p className="education-description">
                  {t(
                    "about.education.interactionDesign.description"
                  )}
                </p>

              </div>

              <div className="education-item">

                <div className="education-header">

                  <h3>
                    {t(
                      "about.education.webDevelopment.title"
                    )}
                  </h3>

                  <span className="education-period">
                    {t(
                      "about.education.webDevelopment.period"
                    )}
                  </span>

                </div>

                <p className="education-location">
                  {t(
                    "about.education.webDevelopment.location"
                  )}
                </p>

                <p className="education-description">
                  {t(
                    "about.education.webDevelopment.description"
                  )}
                </p>

              </div>

            </article>

          </section>

        </div>

      </ScrollReveal>

    </section>
  );
}