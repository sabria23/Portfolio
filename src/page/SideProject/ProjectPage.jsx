import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import projectPageData from "../../DataProject/projectInfoData.js";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectPageData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [id]);

  if (!project) return <p>Project not found</p>;

    const isfinished = project.status?.toLowerCase() === "finish";

    return (
    <section className="project-detail">
        <Link to="/" className="back-btn">
        Back to main</Link> 
        <h1>{project.title}</h1>

        <div className="project-tags">
        {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
        ))}
        </div>

        <p>{project.description}</p>
        
        {!isfinished && (
            <div className="project-status">
                <span className="in-progress">{project.status || "progress"}</span>
                <p className="status-message">
                {project.message ||
                    "This project is still under development and will be available soon."}
                </p>
            </div>
        )}

        {isfinished && (
            <div className="desc-link">
                {/* Live Demo */}
                {project.demo && (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                    >
                    Live Demo <span className="arrow"></span>
                    </a>
                )}

                {/* Github for code */}
                {project.projectType.toLowerCase() === "code" && project.projectLink && (
                    <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="readMore"
                    >
                        Github <span className="arrow"></span>
                    </a>
                )}

                {/* Figma for design */}
                {project.projectType.toLowerCase() === "design" && project.projectLink &&(
                    <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="readMore"
                    >
                        Figma <span className="arrow"></span>
                    </a>
                    )}
                </div>
            )}
        </section>
    );
}
