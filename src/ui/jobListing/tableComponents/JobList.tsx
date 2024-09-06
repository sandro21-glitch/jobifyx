import SingleJob from "./SingleJob";

type JobListTypes = {
  jobs: {
    jobId: string;
    jobTitle: string;
    jobCompanyName: string;
    jobCompanyImage: string;
    jobPublishDate: string;
    jobDeadline: string;
    isVip: boolean;
  }[];
};
const JobList = ({ jobs }: JobListTypes) => {
  return (
    <ul>
      {jobs.map((job) => {
        return <SingleJob key={job.jobId} job={job} />;
      })}
    </ul>
  );
};

export default JobList;
