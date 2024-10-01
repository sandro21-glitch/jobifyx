import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import SingleJobHeader from "./singleJobContent/SingleJobHeader";
import AllVacancyBtn from "./singleJobContent/AllVacancyBtn";
import JobInfoTable from "./singleJobContent/jobInfo/JobInfoTable";
import VacancyDescription from "./singleJobContent/jobInfo/VacancyDescription";
import VacancyComment from "./singleJobContent/jobInfo/VacancyComment";

const SingleJobPage = () => {
  const { state } = useLocation();
  const singleJob = useAppSelector((store) =>
    store.jobs.allJob?.find((job) => job.jobId === state)
  );
  console.log(singleJob);
  if (!singleJob) return null;
  const {
    isVip,
    jobCategory,
    jobComment,
    jobCompanyImage,
    jobCompanyMail,
    jobCompanyName,
    jobCompanyNumber,
    jobDeadline,
    jobDescription,
    jobId,
    jobPublishDate,
    jobTitle,
  } = singleJob;

  return (
    <section className="section-center" style={{ marginTop: "3rem",minHeight:'30vw' }}>
      <SingleJobHeader jobTitle={jobTitle} />
      <AllVacancyBtn />
      <JobInfoTable
        jobTitle={jobTitle}
        jobPublishDate={jobPublishDate}
        jobDeadline={jobDeadline}
        jobCompanyName={jobCompanyName}
      />
      <VacancyDescription jobDescription={jobDescription} />
      <VacancyComment jobComment={jobComment} />
    </section>
  );
};

export default SingleJobPage;
