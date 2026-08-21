import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import projects from "../../DataProject/projectsData.js";

import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();

  const { t } = useTranslation();

  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <p>{t("projectPage.projectNotFound")}</p>;
  }

  const projectKey = `projects.${project.id}`;

  // CHECK IF TRANSLATION EXISTS

  const hasTranslation = (key) => {
    const value = t(key, {
      defaultValue: "",
    });

    return value !== "" && value !== key;
  };

  // GET ARRAY FROM TRANSLATION

  const getArray = (key) => {
    const value = t(key, {
      returnObjects: true,
      defaultValue: [],
    });

    return Array.isArray(value) ? value : [];
  };

  return (
    <section className="project-detail">
      {/*
          BACK
     */}

      <Link to="/" className="back-btn">
        {t("projectPage.back")}
      </Link>

      {/*
          TITLE
     */}

      <h1>{t(`${projectKey}.title`)}</h1>

      {/*
          TAGS
     */}

      {project.tags?.length > 0 && (
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      )}

      {/*
          HERO
     */}

      <section className="project-container-wrap">
        {project.image && (
          <div className="project-cover-image">
            <img src={project.image} alt={t(`${projectKey}.title`)} />

            {hasTranslation(`${projectKey}.description`) && (
              <p className="project-description">
                {t(`${projectKey}.description`)}
              </p>
            )}
          </div>
        )}

        <div>
          <div className="desc-link">
            {/*
                LIVE DEMO
           */}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo"
              >
                {t("projectPage.liveDemo")}

                <span className="arrow"></span>
              </a>
            )}

            {/*
                GITHUB
           */}

            {project.projectType === "code" && project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="readMore"
              >
                {t("projectPage.github")}

                <span className="arrow"></span>
              </a>
            )}

            {/*
                FIGMA
           */}

            {project.projectType === "design" && project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="readMore"
              >
                {t("projectPage.figma")}

                <span className="arrow"></span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/*
          VIDEO
     */}

      {project.video && (
        <div className="wrapp-video">
          <video controls>
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}

      {/*
          ROLE
     */}

      {project.roleKey && (
        <div className="project-section">
          <h2>{t("projectPage.myRole")}</h2>

          <p>{t(project.roleKey)}</p>
        </div>
      )}

      {/*
          PROJECT GOAL
     */}

      {hasTranslation(`${projectKey}.projectGoal`) && (
        <div className="project-section">
          <h2>Goal</h2>

          <p>{t(`${projectKey}.projectGoal`)}</p>
        </div>
      )}

      {/*
          TARGET AUDIENCE
     */}

      {hasTranslation(`${projectKey}.targetAudience`) && (
        <div className="project-section">
          <h2>Target audience</h2>

          <p>{t(`${projectKey}.targetAudience`)}</p>
        </div>
      )}

      {/*
          PROCESS FROM TRANSLATION
          HelseRett uses this list
     */}

      {getArray(`${projectKey}.process`).length > 0 && (
        <div className="project-section">
          <h2>{t("projectPage.process")}</h2>

          <ul className="project-list">
            {getArray(`${projectKey}.process`).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/*
          METHODS
     */}

      {getArray(`${projectKey}.methods`).length > 0 && (
        <div className="project-section">
          <h2>Methods</h2>

          <ul className="project-list">
            {getArray(`${projectKey}.methods`).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/*  
          FOCUS
     */}

      {getArray(`${projectKey}.focus`).length > 0 && (
        <div className="project-section">
          <h2>Focus</h2>

          <div className="step-highlights">
            {getArray(`${projectKey}.focus`).map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      )}

      {/* 
          TOOLS
     */}

      {getArray(`${projectKey}.tools`).length > 0 && (
        <div className="project-section">
          <h2>Tools</h2>

          <div className="step-highlights">
            {getArray(`${projectKey}.tools`).map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      )}

      {/*  
          KEY LEARNINGS
     */}

      {hasTranslation(`${projectKey}.keyLearnings`) && (
        <div className="project-section">
          <h2>Key learnings</h2>

          <p>{t(`${projectKey}.keyLearnings`)}</p>
        </div>
      )}

      {/*  
          OUTCOME
     */}

      {hasTranslation(`${projectKey}.outcome`) && (
        <div className="project-section">
          <h2>Outcome</h2>

          <p>{t(`${projectKey}.outcome`)}</p>
        </div>
      )}

      {/*  
          DETAILED PROCESS FROM projects.js
     */}

      {project.process?.length > 0 && (
        <div className="process-container">
          <h2 className="process-title">{t("projectPage.process")}</h2>

          <div className="process-steps">
            {project.process.map((step, index) => {
              const stepKey = `${projectKey}.process.${step.key}`;

              return (
                <div key={step.key} className="process-step">
                  {/* NUMBER */}

                  <div className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="step-content">
                    {/*TITLE */}

                    {hasTranslation(`${stepKey}.title`) && (
                      <h3>{t(`${stepKey}.title`)}</h3>
                    )}

                    {/* TEXT    */}

                    {hasTranslation(`${stepKey}.text`) && (
                      <p>{t(`${stepKey}.text`)}</p>
                    )}

                    {/*                          ITEMS
                     */}

                    {step.itemsKey && (
                      <ul className="key-insight-list">
                        {getArray(step.itemsKey).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/*                          IMPACT
                     */}

                    {step.impactKey && (
                      <ul className="key-insight-list">
                        {getArray(step.impactKey).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/*                          HIGHLIGHTS
                     */}

                    {step.highlightsKey && (
                      <div className="step-highlights">
                        {getArray(step.highlightsKey).map((item, index) => (
                          <span key={index}>{item}</span>
                        ))}
                      </div>
                    )}

                    {/*                          TECH
                     */}

                    {step.techKey && (
                      <div className="step-highlights">
                        {getArray(step.techKey).map((item, index) => (
                          <span key={index}>{item}</span>
                        ))}
                      </div>
                    )}

                    {/*                          IMAGES
                     */}

                    {step.images?.length > 0 && (
                      <div className="process-image-group">
                        {step.images.map((img, index) => (
                          <div key={index} className="process-image-item">
                            <img
                              src={img.src}
                              alt={img.alt || t(`${stepKey}.title`)}
                            />

                            {img.description && (
                              <p className="image-caption">{img.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/*                          NEW VERSION IMAGES
                     */}

                    {step.newversionImage?.length > 0 && (
                      <div className="new-version-image">
                        {step.newversionImage.map((img, index) => (
                          <div key={index} className="process-image-item">
                            <img
                              src={img.src}
                              alt={img.alt || t(`${stepKey}.title`)}
                            />

                            {img.description && (
                              <p className="image-caption">{img.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
