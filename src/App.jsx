import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

import HomePage from "./Pages/Home/HomeSection";
import ProjectPage from "./Pages/projectPages/ProjectPage";

function App() {
  return (
    <Router>
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