import { FaExternalLinkAlt } from "react-icons/fa";
import VipBadge from "./VipBadge";
import NewBadge from "./NewBadge";

type JobBadgesTypes = {
  isVip: boolean;
  isNewJob: boolean;
};
const JobBadges = ({ isNewJob, isVip }: JobBadgesTypes) => {
  return (
    <div className="flex items-center ml-2">
      <span className="text-[8px] text-gray-500 mr-1">
        <FaExternalLinkAlt />
      </span>
      {/* Display "Vip" badge if the job is vip */}
      {isVip && <VipBadge />}
      {/* Display "New" badge if the job is new */}
      {isNewJob && <NewBadge />}
    </div>
  );
};

export default JobBadges;
