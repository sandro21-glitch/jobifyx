import { BiStar } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineFiberNew } from "react-icons/md";
import { Link } from "react-router-dom";

type JobLinkTypes = {
  jobTitle: string;
  isVip: boolean;
};
const JobLink = ({ jobTitle, isVip }: JobLinkTypes) => {
  return (
    <li className="col-span-3 relative flex items-center">
      <button className="absolute -left-5 text-gray-500 text-[16px] mr-5">
        <BiStar />
      </button>
      <Link to={"/"} className={`${isVip ? 'text-primary font-bold' : 'text-gray-500 font-medium'} `}>
        {jobTitle}
      </Link>
      <div className="flex items-center ml-2">
        <span className="text-[8px] text-gray-500">
          <FaExternalLinkAlt />
        </span>
        <span className="text-[20px] text-red-600">
          <MdOutlineFiberNew />
        </span>
      </div>
    </li>
  );
};

export default JobLink;
