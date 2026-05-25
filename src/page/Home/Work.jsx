import React, { useState } from "react";
import { Link } from "react-router-dom";
import project from "../../DataProject/projectsData";
import "./CSS/Work.css";
import ScrollReveal from "../../component/ScrollReveal";
import CategoryButtons from "./CategoryButtons";

export const MyWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = project
    .filter(
      (project) =>
        activeCategory === "all" ||
        project.projectType.toLowerCase() === activeCategory
    );

  return (
    <section id="work" className="projects">
      <ScrollReveal>
        <div className="project-section">
          <h1 className="section-title">My latest work</h1>

          <CategoryButtons
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <Link to={`/project/${project.id}`} className="link-container">
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-container">
                    <div className="column-project">
                      <h2 className="project-title">{project.title}</h2>

                      <p className="work-category">
                        Category:{" "}
                        <span className="type-category">{project.category}</span>
                      </p>

                      <p className="work-type">
                        {project.type} Project
                      </p>

                      <p>
                        Role: <span className="role">{project.role}</span>
                      </p>
                    </div>

                    <div className="project-content">
                      <p className="desc">{project.description}</p>
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