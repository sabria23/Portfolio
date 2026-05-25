import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import ScrollReveal from "../../component/ScrollReveal";

export default function Footer() {
  return (
    <footer className="footer">
      <section id="footer">
        <ScrollReveal>
          <div className="container">
            <p className="footer-copy">
              © {new Date().getFullYear()} Sabrina Altahrawi
            </p>
          </div>
        </ScrollReveal>
      </section>
    </footer>
  );
}
