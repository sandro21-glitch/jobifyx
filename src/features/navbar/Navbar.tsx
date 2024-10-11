import EnglishBtn from "./EnglishBtn";
import NavList from "./NavList";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="section-center bg-primary rounded-md">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/favorites">
            <FavoriteIcon />
          </Link>
          <NavList />
        </div>
        <EnglishBtn />
      </nav>
    </header>
  );
};

export default Navbar;
