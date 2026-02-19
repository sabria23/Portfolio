import React from "react";
import htmlIcon from "../../assets/html.png";
import reactIcon from "../../assets/react.svg";
import cssIcon from "../../assets/css.png";
import nodeIcon from "../../assets/nodejs.png";
import expressIcon from "../../assets/express.png";
import mongoDBIcon from "../../assets/mongoDB.png";
import dockerIcon from "../../assets/docker.png";
import javascriptIcon from "../../assets/javascript.png";
import figmaIcon from "../../assets/figma.png";
import visualStudioIcon from "../../assets/visualStudio.png";
import terminalIcon from "../../assets/terminal.png";
import "./Skills.css"
import ScrollReveal from "../../component/ScrollReveal";


export default function Skills() {
    return (
        <section id="skills" className="skills">
            <ScrollReveal>
            <h1 className="section-title">Skills & Technologies</h1>
            <div className="skills-grid">

                {/* Frontend Skills */}
                    <div className="skill-card">
                            <h2>Frontend</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={htmlIcon} alt="html icon" /> 
                                        <p>HTML</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill html">98%</div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={cssIcon} alt="css icon" /> 
                                        <p>CSS</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill css">98%</div>
                                    </div>
                                </div>
                                
                                
                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={reactIcon} alt="react icon" /> 
                                        <p>React</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill react">76%</div>
                                    </div>
                                </div> 
                            </div>
                    </div>
                
                {/* Backend Skills */}
                <div className="skill-card">
                            <h2>Backend</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={nodeIcon} alt="Node.js icon" /> 
                                        <p>Node.js</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill nodeJS">56%</div>
                                    </div>
                                </div> 


                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={expressIcon} alt="Express icon" /> 
                                        <p>Express</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill express">56%</div>
                                    </div>
                                </div> 


                            <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={mongoDBIcon} alt="MongoDB icon" /> 
                                        <p>MongoDB</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill mongoDB">66%</div>
                                    </div>
                                </div> 
                            </div>
                    </div>

                    {/* Infrastructure */}
                    <div className="skill-card">
                            <h2>Infrastructure</h2>
                            <div className="skill-content">
                                
                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={dockerIcon} alt="Docker icon" /> 
                                        <p>Docker</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill docker">56%</div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={javascriptIcon} alt="Javascript icon" /> 
                                        <p>Javascript</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill javascript">56%</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    {/* Tools */}
                    <div className="skill-card">
                            <h2>Tools</h2>
                            <div className="skill-content">
                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={figmaIcon} alt="Figma icon" /> 
                                        <p>Figma</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill figma">96%</div>
                                    </div>
                                </div>  


                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={visualStudioIcon} alt="Visual studio Code icon" /> 
                                        <p>Visual Studio Code</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill vsCode">96%</div>
                                    </div>
                                </div>  


                                <div className="skill-item">
                                    <div className="skillicon-container">
                                        <img src={terminalIcon} alt="terminal" /> 
                                        <p>Terminal</p>
                                    </div>
                                    
                                    <div className="rating-container">
                                        <div className="ratingSkill terminal">96%</div>
                                    </div>
                                </div>  
                            </div>
                                
                    </div>

                    
            </div> 
            </ScrollReveal>
        </section>
    );
}