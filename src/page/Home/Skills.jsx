
import React from "react";

import htmlIcon from "../../assets/brand/html.png";
import reactIcon from "../../assets/brand/react.svg";
import cssIcon from "../../assets/brand/css.png";
import nodeIcon from "../../assets/brand/nodejs.png";
import expressIcon from "../../assets/brand/express.png";
import mongoDBIcon from "../../assets/brand/mongoDB.png";
import dockerIcon from "../../assets/brand/docker.png";
import javascriptIcon from "../../assets/brand/javascript.png";
import figmaIcon from "../../assets/brand/figma.png";
import visualStudioIcon from "../../assets/brand/visualStudio.png";
import terminalIcon from "../../assets/brand/terminal.png";
import nextIcon from "../../assets/brand/nextjs-icon.png";

import "./CSS/Skills.css";
import ScrollReveal from "../../component/ScrollReveal";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      categoryKey: "frontend",
      items: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "React", icon: reactIcon },
        { name: "Next.js", icon: nextIcon },
      ],
    },

    {
      categoryKey: "backend",
      items: [
        { name: "Node.js", icon: nodeIcon },
        { name: "Express", icon: expressIcon },
        { name: "MongoDB", icon: mongoDBIcon },
        { name: "REST API", icon: nodeIcon },
        { name: "CRUD APIs", icon: nodeIcon },
      ],
    },

    {
      categoryKey: "infrastructure",
      items: [
        { name: "Docker", icon: dockerIcon },
      ],
    },

    {
      categoryKey: "tools",
      items: [
        { name: "Figma", icon: figmaIcon },
        { name: "Visual Studio Code", icon: visualStudioIcon },
        { name: "Terminal", icon: terminalIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <ScrollReveal>
        <h1 className="section-title">
          {t("skills.title")}
        </h1>

        <div className="skills-grid">
          {skills.map((group) => (
            <div
              key={group.categoryKey}
              className="skill-card"
            >
              <h2>
                {t(`skills.categories.${group.categoryKey}`)}
              </h2>

              <div className="skill-content">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="skill-item"
                  >
                    <div className="skillicon-container">
                      <img
                        src={item.icon}
                        alt={item.name}
                      />
                      <p>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
 
