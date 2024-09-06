import logo from "/logo/logo-black.svg";

const Footer = () => {
  return (
    <footer className="mt-7  border-t-2 border-t-primary">
      <div className="section-center">
        <img
          src={logo}
          alt="website logo"
          className="w-[8rem] h-auto"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
