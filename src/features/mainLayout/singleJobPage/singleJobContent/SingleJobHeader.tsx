import { BiStar } from "react-icons/bi";

type SingleJobHeaderProps = {
  jobTitle: string;
};

const SingleJobHeader = ({ jobTitle }: SingleJobHeaderProps) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <h1 className="text-[20px] text-gray-500">{jobTitle}</h1>
      <button>
        <BiStar className="text-gray-500" />
      </button>
    </div>
  );
};

export default SingleJobHeader;
