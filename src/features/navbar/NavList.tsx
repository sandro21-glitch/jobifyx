import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex items-center gap-5 text-[14px] p-4">
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        <Link to="/">განცხადებები</Link>
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        <Link to="/services">გამოაქვეყნე</Link>
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        <Link to="/faq">კითხვა-პასუხი</Link>
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        <Link to="/contact">კონტაქტი</Link>
      </li>
    </ul>
  );
};

export default NavList;
