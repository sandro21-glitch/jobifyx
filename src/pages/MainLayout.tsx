import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import HeaderLogo from "../features/header/HeaderLogo";
import Filters from "../features/filters/Filters";

const MainLayout = () => {
  return (
    <main>
      <HeaderLogo />
      <Navbar />
      <Filters />
      <Outlet />
    </main>
  );
};

export default MainLayout;
