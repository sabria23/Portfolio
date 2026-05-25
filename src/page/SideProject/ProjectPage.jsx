import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import projectPageData from "../../DataProject/projectInfoData.js";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectPageData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-detail">
      <Link to="/" className="back-btn">
        Back to main
      </Link>

      <h1>{project.title}</h1>
      <div className="project-tags">
        {project.tags?.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      

    <section className="project-container-wrap">
        {project.image && (
          <div className="project-cover-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
      <div>
      <p className="project-description">{project.description}</p>
          {/* LINKS */}
        <div className="desc-link">
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

            {project.projectType?.toLowerCase() === "code" &&
              project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="readMore"
                >
                  Github <span className="arrow"></span>
                </a>
              )}

            {project.projectType?.toLowerCase() === "design" &&
              project.projectLink && (
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
        </div>

    </section>
      
      {project.video && (
        <div className="wrapp-video">
          <video controls>
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}

      {project.details && (
        <div className="project-section">
          <h2>About the project</h2>
          <p>{project.details}</p>
        </div>
      )}

      {project.myRole && (
        <div className="project-section">
          <h2>My role</h2>
          <p>{project.myRole}</p>
        </div>
      )}

      {project.responsibility && (
        <div className="project-section">
          <h2>Responsibilities</h2>
          <p>{project.responsibility}</p>
        </div>
      )}

      {project.forbedring && (
        <div className="project-section">
          <h2>Future improvements</h2>
          <p>{project.forbedring}</p>
        </div>
      )}

      {project.process && (
        <div className="process-container">
          <h2 className="process-title">Process</h2>

          <div className="process-steps">
            {project.process.map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-number">0{i + 1}</div>

                <div className="step-content">
                  <h3>{step.title}</h3>

                  {Array.isArray(step.text) ? (
                    <ul className="key-insight-list">
                      {step.text.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{step.text}</p>
                  )}

                  {Array.isArray(step.impact) ? (
                    <ul className="key-insight-list">
                      {step.impact.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{step.impact}</p>
                  )}

                  {step.highlights && (
                    <div className="step-highlights">
                      {step.highlights.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  )}

                  {step.tech && (
                    <div className="step-highlights">
                      {step.tech.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  )}

                  {step.images && step.images.length > 0 && (
                  <div className="process-image-group">
                    {step.images.map((img, index) => (
                      <div key={index} className="process-image-item">
                        <img src={img.src} alt={img.alt || step.title} />

                        {img.description && (
                          <p className="image-caption">
                            {img.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {step.newversionImage && step.newversionImage.length > 0 && (
                  <div className="new-version-image">
                    {step.newversionImage.map((img, index) => (
                      <div key={index} className="process-image-item">
                        <img src={img.src} alt={img.alt || step.title} />

                        {img.description && (
                          <p className="image-caption">
                            {img.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}