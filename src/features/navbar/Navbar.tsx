import EnglishBtn from "./EnglishBtn";
import NavList from "./NavList";
import FavoriteIcon from "./FavoriteIcon";

const Navbar = () => {
  return (
    <header
      className="section-center bg-primary rounded-md"
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <FavoriteIcon />
          <NavList />
        </div>
        <EnglishBtn />
      </nav>
    </header>
  );
};

export default Navbar;
