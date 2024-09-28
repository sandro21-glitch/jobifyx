import { BiStar } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { Link } from "react-router-dom";


type JobLinkTypes = {
  jobTitle: string;
  jobPublishDate: string;
  isVip: boolean;
};

const JobLink = ({ jobTitle, isVip, jobPublishDate }: JobLinkTypes) => {
  // Parse the jobPublishDate using Date constructor
  const publishDate = new Date(jobPublishDate);

  // Check if the date is valid
  if (isNaN(publishDate.getTime())) {
    console.error("Invalid Date:", jobPublishDate);
    return null;
  }

  // check if the job is new (published within the last 5 days)
  const isNewJob =
    (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24) <= 5;

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
        {/* Display "New" badge if the job is new */}
        {isNewJob && (
          <span className="text-[9px] text-green-500 ml-1 font-semibold">
            NEW
          </span>
        )}
      </div>
    </li>
  );
};

export default JobLink;
