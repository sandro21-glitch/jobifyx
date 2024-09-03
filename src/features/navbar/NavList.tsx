const NavList = () => {
  return (
    <ul className="flex items-center gap-5 text-[14px] p-4">
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        განცხადებები
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        გამოაქვეყნე
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        კითხვა-პასუხი
      </li>
      <li className="text-white hover:text-accent font-semibold cursor-pointer transition-colors">
        კონტაქტი
      </li>
    </ul>
  );
};

export default NavList;
