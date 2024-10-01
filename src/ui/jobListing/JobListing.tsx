import JobHeader from "./tableComponents/JobHeader";
import JobList from "./tableComponents/JobList";

interface JobListingTypes {
  jobs: {
    jobId: string;
    jobTitle: string;
    jobCompanyName: string;
    jobCompanyImage: string;
    jobPublishDate: string;
    jobCompanyMail: string;
    jobComment: string;
    jobDescription: string;
    jobCompanyNumber: number;
    jobDeadline: string;
    isVip: boolean;
    jobCategory: string;
  }[];
}

const JobListing = ({ jobs }: JobListingTypes) => {
  const isVip = jobs?.some((job) => (job.isVip ? true : false));

  if (jobs.length < 1) return <p>ვაკანსიები ვერ მოიძებნა.</p>;
  return (
    <div className="mt-5">
      {/* header */}
      <JobHeader isVip={isVip} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobListing;
