import { BiStar } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiVipFill } from "react-icons/ri";
type JobLinkTypes = {
  jobTitle: string;
  isVip: boolean;
};
const JobLink = ({ jobTitle, isVip }: JobLinkTypes) => {
  return (
    <li className="lg:col-span-3 col-span-1 relative flex items-center">
      <button className="absolute -left-5 text-gray-500 text-[16px] mr-5">
        <BiStar />
      </button>
      <Link
        to={"/"}
        className={`${isVip ? "text-primary" : "text-gray-500"} font-medium`}
      >
        {jobTitle}
      </Link>
      <div className="flex items-center ml-2">
        <span className="text-[8px] text-gray-500 mr-1">
          <FaExternalLinkAlt />
        </span>
        {isVip && (
          <span className="text-[17px] text-red-600">
            <RiVipFill />
          </span>
        )}
      </div>
    </li>
  );
};

export default JobLink;
