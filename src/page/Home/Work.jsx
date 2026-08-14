import React, { useState } from "react";
import { Link } from "react-router-dom";
import project from "../../DataProject/projectsData";
import "./CSS/Work.css";
import ScrollReveal from "../../component/ScrollReveal";
import CategoryButtons from "./CategoryButtons";

import { useTranslation } from "react-i18next";

export const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { t } = useTranslation();

  const filteredProjects = project.filter(
    (project) =>
      activeCategory === "all" ||
      project.projectType.toLowerCase() === activeCategory
  );

  return (
    <section id="work" className="projects">
      <ScrollReveal>
        <div className="project-section">

          <h1 className="section-title">
            {t("work.title")}
          </h1>

          <CategoryButtons
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="project-grid">

            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">

                <Link
                  to={`/project/${project.id}`}
                  className="link-container"
                >

                  <div className="project-img">
                    <img
                      src={project.image}
                      alt={t(`projects.${project.id}.title`)}
                    />
                  </div>

                  <div className="project-container">

                    <div className="column-project">

                      <h2 className="project-title">
                        {t(`projects.${project.id}.title`)}
                      </h2>

                      <p className="work-category">
                        {t("work.category")}:{" "}
                        <span className="type-category">
                          {t(`projects.${project.id}.category`)}
                        </span>
                      </p>

                      <p className="work-type">
                        {project.type} {t("work.project")}
                      </p>

                      <p>
                        {t("work.role")}:{" "}
                        <span className="role">
                          {project.role}
                        </span>
                      </p>

                    </div>

                    <div className="project-content">

                      <p className="desc">
                        {t(`projects.${project.id}.description`)}
                      </p>

                    </div>

                  </div>

                </Link>

              </div>
            ))}

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default MyWork;
