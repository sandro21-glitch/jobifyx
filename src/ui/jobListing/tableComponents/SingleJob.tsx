import JobCompany from "./singleJobInfo/JobCompany";
import JobDeadline from "./singleJobInfo/JobDeadline";
import JobLink from "./singleJobInfo/JobLink";
import JobPublishDate from "./singleJobInfo/JobPublishDate";

type SingleJobTypes = {
  job: {
    jobId: string;
    jobTitle: string;
    jobCompanyName: string;
    jobCompanyImage: string;
    jobPublishDate: string;
    jobDeadline: string;
    isVip: boolean;
  };
};

const SingleJob = ({
  job: {
    jobCompanyImage,
    jobCompanyName,
    jobDeadline,
    jobId,
    jobPublishDate,
    jobTitle,
    isVip
  },
}: SingleJobTypes) => {
  console.log(jobId);

  return (
    <ul
      className="grid grid-cols-7 text-[12px] font-semibold text-primary
  py-2 px-5 hover:bg-gray-100 transition-all ease-in duration-150 border-b"
    >
      <JobLink jobTitle={jobTitle} isVip={isVip} />
      <JobCompany companyName={jobCompanyName} companyImage={jobCompanyImage} />
      <JobPublishDate publishDate={jobPublishDate} />
      <JobDeadline jobDeadline={jobDeadline} />
    </ul>
  );
};

export default SingleJob;
