import JobHeader from "./tableComponents/JobHeader";
import JobList from "./tableComponents/JobList";

interface JobListingTypes {
  isVipJobs: boolean;
  jobs: {
    jobId: string;
    jobTitle: string;
    jobCompanyName: string;
    jobCompanyImage: string;
    jobPublishDate: string;
    jobDeadline: string;
  }[];
}

const JobListing = ({ isVipJobs, jobs }: JobListingTypes) => {
  return (
    <div className="mt-5">
      {/* header */}
      <JobHeader isVip={isVipJobs} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobListing;
