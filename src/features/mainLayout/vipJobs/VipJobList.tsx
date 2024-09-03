import { BiStar } from "react-icons/bi";

const VipJobList = () => {
  return (
    <ul
      className="grid grid-cols-7 text-[12px] font-semibold text-primary
     py-2 px-5 hover:bg-gray-100 transition-all ease-in duration-150"
    >
      <li className="col-span-3 relative flex items-center">
        <button className="absolute -left-5 text-gray-500 text-[16px] mr-5">
          <BiStar />
        </button>
        უფროსი შიდა აუდიტორი
      </li>
      <li className="col-span-2">არდი დაზღვევა</li>
      <li>არდი დაზღვევა</li>
      <li>03 ოქტომბერი</li>
    </ul>
  );
};

export default VipJobList;
