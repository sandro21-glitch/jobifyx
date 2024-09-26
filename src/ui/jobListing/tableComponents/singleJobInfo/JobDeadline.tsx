import { calculateDeadline } from "../../../../utils/calcDeadline";

type JobDeadlineTypes = {
  jobDeadline: string;
  jobPublishDate: string;
  isVip: boolean;
};

const JobDeadline = ({
  jobDeadline,
  isVip,
  jobPublishDate,
}: JobDeadlineTypes) => {
  const formattedDeadline = calculateDeadline(jobPublishDate, jobDeadline);

  return (
    <li
      className={`${
        isVip ? "text-primary" : "text-gray-500"
      } font-medium hidden lg:block`}
    >
      {formattedDeadline}
    </li>
  );
};

export default JobDeadline;
