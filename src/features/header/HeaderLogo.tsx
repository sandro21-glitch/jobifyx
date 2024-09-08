import logo from "/logo/logo-no-background.svg";

const HeaderLogo = () => {
  return (
    <div className=" section-center flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[8rem] h-auto py-5" />
        <div className="w-[1px] h-full bg-primary mx-5 py-5">&nbsp;</div>
        <p className="text-primary text-[.6rem] font-semibold italic">
          გააუმჯობესეთ თქვენი კარიერული გზა
        </p>
      </div>
    </div>
  );
};

export default HeaderLogo;
