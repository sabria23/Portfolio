import React from "react";
import { Link } from "react-router-dom";
import project from "./projectsData";
import "./Work.css";

export const MyWork = () => {

    const renderLink = (project) => {
        if (project.projectType === "Design" && project.projectLink) {
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
        } else if (project.projectType === "Code" && project.projectLink) {
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
            <div>
                <h1 className="section-title">My latest work</h1>

                <div className="project-grid">
                    {project.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                    >
                        
                        <div className="project-img">
                            <img src={project.image} alt="" />
                        </div>
                        
                        {/* Project Header */}
                        <div className="project-container">
                                <div className="column-project">
                                <h2 className="project-title">{project.title}</h2>
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
                            </div>
                        </div>
                        
                    </div>
                    ))}
                </div>
            </div>
             
        </section>
    );
};

export default MyWork;
