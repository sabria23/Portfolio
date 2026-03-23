import React,  { useState } from "react";
import { Link } from "react-router-dom";
import project from "../../DataProject/projectsData";
import "./CSS/Work.css";
import ScrollReveal from "../../component/ScrollReveal";
import CategoryButtons from "./CategoryButtons";

export const MyWork = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = project
        .filter((project) => 
            activeCategory === "all" || project.projectType.toLowerCase() === activeCategory
        )
        .sort((a, b) => {
            if (a.status === "finish" && b.status !== "finish") return -1;
            if (a.status === "finish" && b.status !== "finish") return 1;
            return 0;
        })
    

   


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
                    {filteredProjects.map((project) => {

                        const isFinished = project.status?.toLowerCase() === "finish";
                        
                        return (
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
                                        <div className="badge-container">
                                            {isFinished ? (
                                                <span className="status-badge finished">Finished</span>
                                            ) : (
                                                <span className="status-badge progress">In Progress</span>
                                            )}
                                        </div>
                                      
                                    
                                    <p className="work-category">Category: <span className="type-category">{project.category}</span>  </p>
                                    <p className="work-type">{project.type} Project</p>
                                    <p>
                                        Role: <span className="role">{project.role}</span>
                                    </p>
                                </div>

                                {/* Project Description */}
                                <div className="project-content">
                                     

                                    <p className="desc">{project.description}</p>
                                    
                                   
                                     <div className="desc-link"> 
                                        <Link to={`/project/${project.id}`} className="btn-readMore">
                                        Read more <span className="arrow"></span> 
                                    </Link>

                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
            </ScrollReveal>
        </section>
    );
};

export default MyWork;
