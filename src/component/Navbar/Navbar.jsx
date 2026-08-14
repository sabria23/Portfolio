import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logoLink from "../../assets/brand/sab-logoName.png";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../Theme/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    {
      code: "en",
      label: "English",
    },
    {
      code: "no",
      label: "Norsk",
    },
  ];

  return (
    <nav id="nav">
      <div className="nav-container">

        <img
          className="logo-navbar"
          src={logoLink}
          alt="Logo"
        />

        <div
          className="menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`nav-links ${
            isOpen ? "open" : ""
          }`}
        >
          <li>
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {t("nav.home")}
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {t("nav.projects")}
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {t("nav.about")}
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              {t("nav.skills")}
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="active"
            >
              {t("nav.contact")}
            </Link>
          </li>
        </ul>

        <div className="language-switcher">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={
                i18n.language === lang.code
                  ? "language-active"
                  : ""
              }
            >
              {lang.label}
            </button>
          ))}
        </div>

        <ThemeToggle />

      </div>
    </nav>
  );
}