import { useState } from "react";
import { useAppDispatch } from "../../../../hooks";
import { addJobToDatabase } from "../../../../slices/jobSlice/jobThunks";
import { JobTypes } from "../../../../slices/jobSlice/jobTypes";
import AdDetailsInputs from "./adDetailsInputs/AdDetailsInputs";
import AddJobBtn from "./AddJobBtn";
import CompanyInfo from "./companyInfoInputs/CompanyInfo";

const PostingAdForm = () => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobCompanyName, setJobCompanyName] = useState<string>("");
  const [jobCompanyMail, setJobCompanyMail] = useState<string>("");
  const [jobComment, setJobComment] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobCompanyNumber, setCompanyNumber] = useState<number>(0);
  const [jobCompanyImage, setJobCompanyImage] = useState<string>("");
  const [jobPublishDate, setJobPublishDate] = useState<string>("");
  const [jobDeadline, setJobDeadline] = useState<string>("");
  const [isVip, setIsVip] = useState<boolean>(false);

  const job: Omit<JobTypes, "jobId"> = {
    jobTitle,
    jobCompanyName,
    jobCompanyImage,
    jobPublishDate,
    jobDeadline,
    isVip,
    jobCompanyMail,
    jobCompanyNumber,
  };

  const dispatch = useAppDispatch();

  const addNewJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addJobToDatabase({ job }));
  };

  return (
    <form onSubmit={addNewJob}>
      <CompanyInfo
        jobCompanyName={jobCompanyName}
        setJobCompanyName={setJobCompanyName}
        jobCompanyMail={jobCompanyMail}
        setJobCompanyMail={setJobCompanyMail}
        jobCompanyNumber={jobCompanyNumber}
        setCompanyNumber={setCompanyNumber}
      />
      <AdDetailsInputs
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        jobComment={jobComment}
        setJobComment={setJobComment}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
      />
      <AddJobBtn />
    </form>
  );
};

export default PostingAdForm;
