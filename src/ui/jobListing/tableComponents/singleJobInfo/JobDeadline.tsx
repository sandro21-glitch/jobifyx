type JobDeadlineTypes = {
  jobDeadline: string;
};
const JobDeadline = ({ jobDeadline }: JobDeadlineTypes) => {
  return <li>{jobDeadline}</li>;
};

export default JobDeadline;
