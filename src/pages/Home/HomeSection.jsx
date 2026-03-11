import "./CSS/Home.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import MyWork from "./Work";

export default function HomePage() {
  return (
    <div>
      <Home />
      <MyWork />
      <About />
      <Skills />
    </div>
  );
}