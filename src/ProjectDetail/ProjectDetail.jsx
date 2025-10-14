import React from "react";
import project from "../data/projectsData";

import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import project from "../data/projectsData";

export const ProjectDetail = () => {
    const { id } = useParams();
    const project = project.find( p => p.id === id);

    if (!project) {
        return <div className="not-found">Project not found</div>;
    }


    return (
        <section id="work" className="projects">
            <div>
                <h1>{project.title}</h1>
                <h1 className="section-title">My latest work</h1>
            </div>
        </section>
    );
};

export default ProjectDetail;
