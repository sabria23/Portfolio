import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./Pages/SideProject/ProjectPage.jsx";
import HomePage from "./Pages/Home/HomeSection.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

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