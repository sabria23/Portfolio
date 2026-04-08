import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import ProjectPage from "./page/SideProject/ProjectPage.jsx";
import HomePage from "./page/Home/HomeSection.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Analytics/>
      <div className="app-container">
        <Routes> 
          <Route
            path="/"
            element={
              <>
                <div className="page-container">
                  <Navbar />
                  <HomePage />
                </div>
                <Footer />
              </>
            }
          /> 

          <Route
            path="/project/:id"
            element={
              <>
                <div className="page-container">
                  <ProjectPage />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;