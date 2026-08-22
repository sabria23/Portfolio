import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;