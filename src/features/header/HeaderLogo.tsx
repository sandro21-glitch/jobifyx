import { Link } from "react-router-dom";
import logo from "/logo/logo-no-background.svg";

const HeaderLogo = () => {
  return (
    <div className=" section-center flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[8rem] h-auto py-5 cursor-pointer"
          />
        </Link>
        <div className="w-[2px] h-full bg-primary mx-5 py-5">&nbsp;</div>
        <p className="text-primary text-[.6rem] font-semibold italic">
          გააუმჯობესეთ თქვენი კარიერული გზა
        </p>
      </div>
    </div>
  );
};

export default HeaderLogo;
