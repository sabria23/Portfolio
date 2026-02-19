import React,  { useState } from "react";
import { Link } from "react-router-dom";
import project from "../../data/projectsData";
import "./Work.css";
import ScrollReveal from "../../component/ScrollReveal";
import CategoryButtons from "./CategoryButtons";

export const MyWork = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = project.filter((project) => 
        activeCategory === "all" || project.projectType.toLowerCase() === activeCategory
    );

    const renderLink = (project) => {
        if (project.projectType.toLowerCase() === "design" && project.projectLink) {
            return (
                <a 
            target="_blank" 
            href={project.projectLink} 
            rel="noopener noreferrer"
            className="readMore"
                >
                Figma<span className="arrow"></span>
            </a>
            );
        } else if (project.projectType.toLowerCase() === "code" && project.projectLink) {
            return (
                <a
                href={project.projectLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="readMore"
                >
                Github <span className="arrow"></span>
            </a>
            )
            
        } else {
            return null;
        }
    }


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
                        <div
                            key={project.id}
                            className="project-card"
                        >
                            
                            <div className="project-img">
                                <img src={project.image} alt="" />
                            </div>
                            
                            {/* Project Header */}
                            <div className="project-container">
                                    <div className="column-project">
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="">Category: <span className="type-category">{project.category}</span>  </p>
                                    <p className="type">{project.type} Project</p>
                                    <p>
                                        Role: <span className="role">{project.role}</span>
                                    </p>
                                </div>

                                {/* Project Description */}
                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                        ))}
                                    </div>

                                    <p className="desc">{project.description}</p>
                                    
                                    <div className="desc-link">
                                        {renderLink(project)}

                                        {project.demo && (
                                        
                                            <a href={project.demo} 
                                            className="demo" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            >
                                                Live Demo <span className="arrow"></span>
                                            </a>
                                        )}
                                    </div>
                                {/* <Link to={`/project/${project.id}`} className="readMore">Read more <span className="arrow"></span></Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            </ScrollReveal>
        </section>
    );
};

export default MyWork;
