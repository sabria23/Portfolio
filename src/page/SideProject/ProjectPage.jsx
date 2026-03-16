import { useParams, Link } from "react-router-dom";
import projectPageData from "../../DataProject/projectInfoData.js";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectPageData.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

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
    <section className="project-detail">
      <h1>{project.title}</h1>
      <div className="project-tags">
        {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
      </div>
      <p>{project.description}</p>
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      {project.projectLink && <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>}


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
      <Link to="/">← Back to main</Link>
    </section>
  );
}