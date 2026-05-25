import "./CSS/Home.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import MyWork from "./Work";
import ContactUs from "./ContactUs";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <MyWork />
      <About />
      <Skills />
      <ContactUs />
    </div>
  );
}