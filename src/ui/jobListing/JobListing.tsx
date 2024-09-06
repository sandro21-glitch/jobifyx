import JobHeader from "./tableComponents/JobHeader";
import JobList from "./tableComponents/JobList";

interface JobListingTypes {
  jobs: {
    jobId: string;
    jobTitle: string;
    jobCompanyName: string;
    jobCompanyImage: string;
    jobPublishDate: string;
    jobDeadline: string;
    isVip: boolean;
  }[];
}

const JobListing = ({ jobs }: JobListingTypes) => {
  const isVip = jobs?.some((job) => job.isVip ? true : false)

  return (
    <div className="mt-5">
      {/* header */}
      <JobHeader isVip={isVip} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobListing;
