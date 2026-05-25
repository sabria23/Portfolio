import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import MainLayout from "./layout/MainLayout";

import HomePage from "./page/Home/HomeSection";
import ProjectPage from "./page/SideProject/ProjectPage";

import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <Analytics />

      <div className="app-container">
        <Routes>

          {/* Med Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          {/* Uten Navbar */}
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