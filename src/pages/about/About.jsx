import React from "react"; 
import ProfileImg from "../../assets/portaitMySelf.png";
import "./About.css";
import ScrollReveal from "../../component/ScrollReveal";


export default function About() {
    return (
     
        <section id="about" className="about">   
        <ScrollReveal> 
            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">About Me</h2>
                    
                    <div className="para-container">
                        <p className="about-role">
                        Frontend Developer & Interaction Designer
                    </p>
                    <p className="about-description"> 
                        I am currently in my final year of Web Development at NTNU Gjøvik, while also pursuing a degree in Interaction Design, which I plan to complete alongside my
                        work. I am passionate about creating intuitive, engaging, and user-friendly web experience.
                    </p>
                    </div>
                    
                </div>
            </div>
            </ScrollReveal>
        </section>
    )
}
