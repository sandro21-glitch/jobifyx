import JobListing from "../../../ui/jobListing/JobListing";

const tempStandardJobList = [
  {
    jobId: "1",
    jobTitle: "უფროსი შიდა აუდიტორი",
    jobCompanyName: "არდი დაზღვევა",
    jobCompanyImage:
      "https://jobs.ge/data/clients/logo_icon/6612_logo_for_jobsge_1333557.gif",
    jobPublishDate: "03 სექტემბერი",
    jobDeadline: "03 ოქტომბერი",
  },
  {
    jobId: "3",
    jobTitle: "უფროსი შიდა აუდიტორი",
    jobCompanyName: "არდი დაზღვევა",
    jobCompanyImage:
      "https://jobs.ge/data/clients/logo_icon/6612_logo_for_jobsge_1333557.gif",
    jobPublishDate: "03 სექტემბერი",
    jobDeadline: "03 ოქტომბერი",
  },
  {
    jobId: "444",
    jobTitle: "უფროსი შიდა აუდიტორი",
    jobCompanyName: "არდი დაზღვევა",
    jobCompanyImage:
      "https://jobs.ge/data/clients/logo_icon/6612_logo_for_jobsge_1333557.gif",
    jobPublishDate: "03 სექტემბერი",
    jobDeadline: "03 ოქტომბერი",
  },
  {
    jobId: "4441",
    jobTitle: "უფროსი შიდა აუდიტორი",
    jobCompanyName: "არდი დაზღვევა",
    jobCompanyImage:
      "https://jobs.ge/data/clients/logo_icon/6612_logo_for_jobsge_1333557.gif",
    jobPublishDate: "03 სექტემბერი",
    jobDeadline: "03 ოქტომბერი",
  },
];

const StandardJobListings = () => {
  return <JobListing isVipJobs={false} jobs={tempStandardJobList} />;
};

export default StandardJobListings;
