 
import "./CSS/Home.css";

import profileImg from "../../assets/images/MyPicture.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

import ScrollReveal from "../../component/ScrollReveal";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-container">
      <div className="main-text">
        <h1>{t("home.greeting")}</h1>

        <h2>{t("home.name")}</h2>

        <div className="words-container">
          <span className="text first-text">
            {t("home.role")}
          </span>
        </div>

        <p>
          {t("home.description")}
        </p>

        <p>
          {t("home.intro")}
        </p>

        <div className="btn-action">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="btn-work"
          >
            {t("home.exploreWork")}
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-link"
          >
            {t("home.contactMe")}
          </Link>
        </div>
      </div>

      <div className="profile-container">
        <img
          className="id-card"
          src={profileImg}
          alt="Portrait of Sabrina"
        />
      </div>
    </section>
  );
} 