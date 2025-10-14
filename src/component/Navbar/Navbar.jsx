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
                
                <li><a href="#home">Home</a></li>
                <li><a href="#work">Project</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </div>
    </nav>
    )
}