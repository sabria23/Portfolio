import React from "react";
import ProfileImg from "../../assets/images/MyPicture.png";
import "./CSS/About.css";
import ScrollReveal from "../../component/ScrollReveal";


export default function About() {
    return (
        <section id="about" className="about">
        <ScrollReveal>
            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">About Me</h2>

                    <div>
                        <p className="about-role">
                            Frontend Developer & Interaction Designer
                        </p>
                        <p className="about-description">
                            I am currently in my final year of Web Development at NTNU
                            Gjøvik, while also pursuing a degree in Interaction Design,
                            which I plan to complete alongside my work. I am passionate
                            about creating intuitive, engaging, and user-friendly web
                            experience.
                        </p>

                        <section className="para-container">
                            <article className="about-card">
                                <h2>Creative</h2>
                                <div>
                                    <p>I love exploring new ideas and finding innovative ways to combine design and technology</p>
                                    <p>Bring new perspective into every project.</p>
                                </div>
                            </article>

                            <article className="about-card">
                                <h2>Passionate</h2>
                                <p>I am passionate about creating meaningful and user-focused experiences.</p>
                            </article>

                            <article className="about-card">
                                <h2>Collaborative</h2>
                                <p>I enjoy working with others to share ideas and create something greater together.</p>
                            </article>
                        </section>
                    </div>
                </div>

                <section className="education">
                    <h2 className="education-title">Education</h2>
                    <article className="education-card">
                        
                        <div className="education-item">
                            <div className="education-header">
                                <h3>Bachelor in Interaction Design</h3>
                                <span className="education-period">2022 - Present</span>
                            </div>
                            <p className="education-location">
                                NTNU Gjøvik | Faculty of Architecture and Design
                            </p>
                            <p className="education-description">
                                Learning process methods
                            </p>
                        
                        </div>
                        
                        <div className="education-item">
                            <div className="education-header">
                                <h3>Bachelor in web Development</h3>
                                <span className="education-period">2025 - Present</span>
                            </div>
                            <p className="education-location">
                                NTNU Gjøvik | Faculty of Architecture and Design
                            </p>
                            <p className="education-description">
                                
                            </p>
                        
                        </div>
                    </article>
                </section>
            </div>
        </ScrollReveal>
        </section>
    );
}
