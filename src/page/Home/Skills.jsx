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

export default function Skills() {
  const skills = [
    {
      category: "Frontend development",
      items: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "React", icon: reactIcon },
        { name: "Next.js", icon: nextIcon },
      ],
    },

    {
      category: "Backend development",
      items: [
        { name: "Node.js", icon: nodeIcon },
        { name: "Express", icon: expressIcon },
        { name: "MongoDB", icon: mongoDBIcon },
        { name: "REST API", icon: nodeIcon },
        { name: "CRUD APIs", icon: nodeIcon },
      ],
    },

    {
      category: "Infrastructure",
      items: [
        { name: "Docker", icon: dockerIcon },
      ],
    },

    {
      category: "Tools",
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
        <h1 className="section-title">Skills & Technologies</h1>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h2>{group.category}</h2>

              <div className="skill-content">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <div className="skillicon-container">
                      <img src={item.icon} alt={item.name} />
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