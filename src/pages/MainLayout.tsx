import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import HeaderLogo from "../features/header/HeaderLogo";

const MainLayout = () => {
  return (
    <main>
      <HeaderLogo />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
