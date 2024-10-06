import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import SingleJobHeader from "./singleJobContent/SingleJobHeader";
import AllVacancyBtn from "./singleJobContent/AllVacancyBtn";
import JobInfoTable from "./singleJobContent/jobInfo/JobInfoTable";
import VacancyComment from "./singleJobContent/jobInfo/VacancyComment";
import JobQualifications from "./singleJobContent/jobInfo/JobQualifications";
import JobResponsibilities from "./singleJobContent/jobInfo/JobResponsibilities";

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
    jobId,
    jobPublishDate,
    jobTitle,
    qualifications,
    responsibilities,
  } = singleJob;

  return (
    <section
      className="section-center"
      style={{ marginTop: "3rem", minHeight: "30vw" }}
    >
      <SingleJobHeader jobTitle={jobTitle} />
      <AllVacancyBtn />
      <JobInfoTable
        jobTitle={jobTitle}
        jobPublishDate={jobPublishDate}
        jobDeadline={jobDeadline}
        jobCompanyName={jobCompanyName}
      />
      <p className="text-[14px] text-gray-500">
        <span className="font-bold">"{jobCompanyName}"</span> აცხადებს ვაკანსიას{" "}
        {jobTitle}-ის პოზიციაზე.
      </p>
      <VacancyComment jobComment={jobComment} />
      <JobResponsibilities responsibilities={responsibilities} />
      <JobQualifications qualifications={qualifications} />
      <p className="text-[14px] text-gray-500 mt-5">
        დაინტერესებულმა პირებმა გამოგვიგზავნეთ CV ელექტრონულ მისამართზე:{" "}
        <span className="font-bold text-primary">{jobCompanyMail}</span>.
        გთხოვთ, მიუთითეთ ვაკანსიის დასახელება სათაურის ველში.
      </p>
    </section>
  );
};

export default SingleJobPage;
