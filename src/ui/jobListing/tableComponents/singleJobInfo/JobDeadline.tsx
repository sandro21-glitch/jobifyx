type JobDeadlineTypes = {
  jobDeadline: string;
  isVip: boolean;
};
const JobDeadline = ({ jobDeadline, isVip }: JobDeadlineTypes) => {
  return (
    <li className={`${isVip ? "text-primary" : "text-gray-500"} font-medium hidden lg:block`}>
      {jobDeadline}
    </li>
  );
};

export default JobDeadline;
