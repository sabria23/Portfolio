import "./Home.css";
import { useEffect, useRef } from "react";
import profileImg from "../../assets/MyPicture.png";
// import animateImg from "../../assets/portaitMySelf.png";
import { Link } from "react-scroll";

import ScrollReveal from "../../component/ScrollReveal";



export default function Home() {
    const textRef = useRef(null);

    useEffect(() => {
        const textEl = textRef.current;
        const phrases = ["a Frontend developer", "an Interacton designer"];
        let index = 0;
        
        const changeText = () => {
            textEl.textContent = phrases[index];
            index = (index + 1) % phrases.length;
        };

        changeText();
        const intervalid = setInterval(changeText, 4000);

        return () => clearInterval(intervalid);
    }, []);

    return (
            <section id="home" className="home-container">
               
                <div className="main-text"> 
                    <h1>Hi</h1>
                    <h2>I'm Sabrina</h2> 

                    <div className="words-container">
                        
                            <span className="text first-text">And I'm </span>
                            <span className="text sec-text" ref={textRef}></span>
                    </div>
                    
                    <p>
                        I'm a frontend developer, also persuing a bachelor degree in interaction design.
                        I love creating clean, user-friendly interfaces that work beautifully on all devices.
                    </p>
                    <p>
                        I love solving problems, building cool stuff, and growing every day.
                    </p>

                    <div className="btn-action">
                        <Link to="work" smooth={true} duration={500} className="btn-work">Explore my work</Link>
                            <a className="btn-link" href="https://www.linkedin.com/in/sabrina-altahrawi-029bab1a6/" target="_blank" rel="noopener noreferrer">
                                    Linkedln
                            </a>
                        
                    </div>
                </div>
                
                <div className="profile-container">
                    <img src={profileImg} alt="Portait of Sabrina" />
                    {/* <img src={animateImg} alt="" className="animateImg-back" /> */}
                </div>
               
            </section>
    )
}