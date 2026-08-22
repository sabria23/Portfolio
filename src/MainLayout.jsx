import { Outlet } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <div className="page-container">
        <Navbar />

        <main className="content">
          <Outlet />
        </main>
      </div>
 
    </>
  );
}

export default MainLayout;
