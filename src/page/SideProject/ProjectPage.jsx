import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import projects from "../../DataProject/projectsData.js";

import "./ProjectPage.css";


export default function ProjectPage() {
  const { id } = useParams();

  const { t } = useTranslation();

  const project = projects.find(
    (project) => project.id === id
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  if (!project) {
    return (
      <p>
        {t("projectPage.projectNotFound")}
      </p>
    );
  }


  const projectKey = `projects.${project.id}`;


  return (
    <section className="project-detail">

      {/* BACK */}

      <Link
        to="/"
        className="back-btn"
      >
        {t("projectPage.back")}
      </Link>


      {/* TITLE */}

      <h1>
        {t(`${projectKey}.title`)}
      </h1>


      {/* TAGS */}

      <div className="project-tags">

        {project.tags?.map((tag, index) => (
          <span key={index}>
            {tag}
          </span>
        ))}

      </div>


      {/* HERO */}

      <section className="project-container-wrap">

        {project.image && (
          <div className="project-cover-image">
 <p className="project-description">
            {t(`${projectKey}.description`)}
          </p>
            <img
              src={project.image}
              alt={t(`${projectKey}.title`)}
            />

          </div>
        )}


        <div>

         


          <div className="desc-link">

            {/* LIVE DEMO */}

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


            {/* GITHUB */}

            {project.projectType === "code" &&
              project.projectLink && (

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


            {/* FIGMA */}

            {project.projectType === "design" &&
              project.projectLink && (

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


      {/* VIDEO */}

      {project.video && (

        <div className="wrapp-video">

          <video controls>

            <source
              src={project.video}
              type="video/mp4"
            />

          </video>

        </div>

      )}


      {/* ROLE */}

      {project.roleKey && (

        <div className="project-section">

          <h2>
            {t("projectPage.myRole")}
          </h2>

          <p>
            {t(project.roleKey)}
          </p>

        </div>

      )}


      {/* PROCESS */}

      {project.process?.length > 0 && (

        <div className="process-container">

          <h2 className="process-title">
            {t("projectPage.process")}
          </h2>


          <div className="process-steps">

            {project.process.map(
              (step, index) => {

                const stepKey =
                  `${projectKey}.process.${step.key}`;


                return (

                  <div
                    key={step.key}
                    className="process-step"
                  >

                    {/* NUMBER */}

                    <div className="step-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>


                    <div className="step-content">

                      {/* TITLE */}

                      <h3>
                        {t(
                          `${stepKey}.title`
                        )}
                      </h3>


                      {/* TEXT */}

                      {t(`${stepKey}.text`, {
                        defaultValue: "",
                      }) && (

                        <p>
                          {t(
                            `${stepKey}.text`
                          )}
                        </p>

                      )}


                      {/* ITEMS */}

                      {step.itemsKey && (

                        <ul className="key-insight-list">

                          {t(
                            step.itemsKey,
                            {
                              returnObjects: true,
                            }
                          ).map(
                            (item, index) => (

                              <li key={index}>
                                {item}
                              </li>

                            )
                          )}

                        </ul>

                      )}


                      {/* IMPACT */}

                      {step.impactKey && (

                        <ul className="key-insight-list">

                          {t(
                            step.impactKey,
                            {
                              returnObjects: true,
                            }
                          ).map(
                            (item, index) => (

                              <li key={index}>
                                {item}
                              </li>

                            )
                          )}

                        </ul>

                      )}


                      {/* HIGHLIGHTS */}

                      {step.highlightsKey && (

                        <div className="step-highlights">

                          {t(
                            step.highlightsKey,
                            {
                              returnObjects: true,
                            }
                          ).map(
                            (item, index) => (

                              <span key={index}>
                                {item}
                              </span>

                            )
                          )}

                        </div>

                      )}


                      {/* TECH */}

                      {step.techKey && (

                        <div className="step-highlights">

                          {t(
                            step.techKey,
                            {
                              returnObjects: true,
                            }
                          ).map(
                            (item, index) => (

                              <span key={index}>
                                {item}
                              </span>

                            )
                          )}

                        </div>

                      )}


                      {/* IMAGES */}

                      {step.images?.length > 0 && (

                        <div className="process-image-group">

                          {step.images.map(
                            (img, index) => (

                              <div
                                key={index}
                                className="process-image-item"
                              >

                                <img
                                  src={img.src}
                                  alt={
                                    img.alt ||
                                    t(
                                      `${stepKey}.title`
                                    )
                                  }
                                />

                                {img.description && (

                                  <p className="image-caption">
                                    {img.description}
                                  </p>

                                )}

                              </div>

                            )
                          )}

                        </div>

                      )}


                      {/* NEW VERSION IMAGES */}

                      {step.newversionImage?.length > 0 && (

                        <div className="new-version-image">

                          {step.newversionImage.map(
                            (img, index) => (

                              <div
                                key={index}
                                className="process-image-item"
                              >

                                <img
                                  src={img.src}
                                  alt={
                                    img.alt ||
                                    t(
                                      `${stepKey}.title`
                                    )
                                  }
                                />

                                {img.description && (

                                  <p className="image-caption">
                                    {img.description}
                                  </p>

                                )}

                              </div>

                            )
                          )}

                        </div>

                      )}

                    </div>

                  </div>

                );

              }
            )}

          </div>

        </div>

      )}

    </section>
  );
}