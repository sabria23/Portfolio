import { Outlet } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

function MainLayout() {
  return (
    <>
      <div className="page-container">
        <Navbar />

        <main className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
