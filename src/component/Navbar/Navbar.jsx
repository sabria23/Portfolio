import React, { useState } from "react"; 
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav id="nav">
        <div className="nav-container">
            <a href="#" className="logo-link">Portfolio</a>
            
            <div className="menu"
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>       
                
                <li>
                    <Link
                        className="nav-link"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        Home
                    </Link>
                </li>
                 <li>
                    <Link
                        className="nav-link"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        Project
                    </Link>
                </li>

                <li>
                    <Link
                        className="nav-link"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        Contact me
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}