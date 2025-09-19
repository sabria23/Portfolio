import React from "react";
import htmlIcon from "../../assets/html.png";
import reactIcon from "../../assets/react.svg";

import cssIcon from "../../assets/css.png";
import nodeIcon from "../../assets/nodejs.png";
import expressIcon from "../../assets/express.png";
import mongoDBIcon from "../../assets/mongoDB.png";
import dockerIcon from "../../assets/docker.png";
import chameleonIcon from "../../assets/chameleon.png";
import figmaIcon from "../../assets/figma.png";
import visualStudioIcon from "../../assets/visualStudio.png";
import terminalIcon from "../../assets/terminal.png";
import "./Skills.css"

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <h1 className="section-title">My skills</h1>
            <div className="skills-grid">

                {/* Frontend Skills */}
                    <div className="skill-card">
                            <h2>Frontend</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <img src={reactIcon} alt="html icon" /> 
                                    <p>React</p>
                                </div> 
                              
                                <div className="skill-item">
                                    <img src={htmlIcon} alt="html icon" /> 
                                    <p>HTML</p>
                                </div>
                                 <div className="skill-item">
                                    <img src={cssIcon} alt="html icon" /> 
                                    <p>CSS</p>
                                </div>
                            </div>
                    </div>
                
                {/* Backend Skills */}
                <div className="skill-card">
                            <h2>Backend</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <img src={nodeIcon} alt="html icon" /> 
                                    <p>Node.js</p>
                                </div> 
                                <div className="skill-item">
                                    <img src={expressIcon} alt="html icon" /> 
                                    <p>Express</p>
                                </div>
                                <div className="skill-item">
                                    <img src={mongoDBIcon} alt="html icon" /> 
                                    <p>MongoDB</p>
                                    
                                </div>
                            </div>
                    </div>

                    {/* Infrastructure */}
                    <div className="skill-card">
                            <h2>Infrastructure</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <img src={dockerIcon} alt="html icon" /> 
                                    <p>Docker</p>
                                </div> 
                                <div className="skill-item">
                                    <img src={chameleonIcon} alt="html icon" /> 
                                    <p>Chameleon Cloud</p>
                                </div>
                            </div>
                                
                    </div>
                    
                    {/* Tools */}
                    <div className="skill-card">
                            <h2>Tools</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <img src={figmaIcon} alt="html icon" /> 
                                    <p>Figma</p>
                                </div> 
                                <div className="skill-item">
                                    <img src={visualStudioIcon} alt="html icon" /> 
                                    <p>VS Code</p>
                                </div>
                                <div className="skill-item">
                                    <img src={terminalIcon} alt="html icon" /> 
                                    <p>Terminal</p>
                                </div>
                            </div>
                                
                    </div>

                    
            </div> 
        </section>
    );
}