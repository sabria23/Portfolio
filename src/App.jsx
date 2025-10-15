
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
// import Router from './routes/Router';
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";


function App() {
  return (
      <BrowserRouter>
        <div className="page-container">
          <Navbar />
            <Home />
            <Work />
            <About />
            <Skills />
        </div> 
        <Footer />
      </BrowserRouter> 
  )
}

export default App
