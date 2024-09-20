import { useState } from "react";
import { useAppDispatch } from "../../../../hooks";
import { addJobToDatabase } from "../../../../slices/jobSlice/jobThunks";
import { JobTypes } from "../../../../slices/jobSlice/jobTypes";
import AdDetailsInputs from "./adDetailsInputs/AdDetailsInputs";
import AddJobBtn from "./AddJobBtn";
import CompanyInfo from "./companyInfoInputs/CompanyInfo";
import JobSettings from "./jobSettings/JobSettings";

const PostingAdForm = () => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobCompanyName, setJobCompanyName] = useState<string>("");
  const [jobCompanyMail, setJobCompanyMail] = useState<string>("");
  const [jobComment, setJobComment] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobCompanyNumber, setCompanyNumber] = useState<number>(0);
  const [jobCompanyImage, setJobCompanyImage] = useState<string>("");
  const [jobDeadline, setJobDeadline] = useState<string>("1 თვე");
  const [isVip, setIsVip] = useState<boolean>(false);

  const job: Omit<JobTypes, "jobId"> = {
    jobTitle,
    jobCompanyName,
    jobCompanyImage,
    jobPublishDate: new Date().toLocaleString(),
    jobDeadline,
    isVip,
    jobCompanyMail,
    jobCompanyNumber,
    jobComment,
    jobDescription,
  };

  const dispatch = useAppDispatch();

  const addNewJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (jobCompanyImage !== "") {
      dispatch(addJobToDatabase({ job }));
    } else {
      console.error("Job image URL is empty.");
    }
  };

  return (
    <form
      onSubmit={addNewJob}
      className="flex flex-col items-center justify-between w-full "
    >
      <div className="grid lg:grid-cols-3 gap-5 w-full">
        <div>
          <CompanyInfo
            jobCompanyName={jobCompanyName}
            setJobCompanyName={setJobCompanyName}
            jobCompanyMail={jobCompanyMail}
            setJobCompanyMail={setJobCompanyMail}
            jobCompanyNumber={jobCompanyNumber}
            setCompanyNumber={setCompanyNumber}
          />
        </div>
        <div>
          <AdDetailsInputs
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            jobComment={jobComment}
            setJobComment={setJobComment}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            setJobCompanyImage={setJobCompanyImage}
          />
        </div>
        <div>
          <JobSettings
            jobDeadline={jobDeadline}
            setJobDeadline={setJobDeadline}
            isVip={isVip}
            setIsVip={setIsVip}
          />
        </div>
      </div>
      <div>
        <AddJobBtn />
      </div>
    </form>
  );
};

export default PostingAdForm;
