import { useState } from "react";
import { useAppDispatch } from "../../../../hooks";
import { addJobToDatabase } from "../../../../slices/jobSlice/jobThunks";
import { JobTypes } from "../../../../slices/jobSlice/jobTypes";
import AdDetailsInputs from "./adDetailsInputs/AdDetailsInputs";
import AddJobBtn from "./AddJobBtn";
import CompanyInfo from "./companyInfoInputs/CompanyInfo";
import JobSettings from "./jobSettings/JobSettings";
import MarkdownPreview from "./markdownPrev/MarkdownPreview";
import { nanoid } from "nanoid";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
  const [jobCategoryType, setJobCategoryType] = useState<string>("");

  const [uploading, setUploading] = useState(false);

  const job: JobTypes = {
    jobId: nanoid(),
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
    jobCategory: jobCategoryType,
  };

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => dispatch(addJobToDatabase(job)),
    onSuccess: () => {
      // refetch VIP and standard jobs after a successful mutation
      queryClient.invalidateQueries({ queryKey: ["vipJobs"] });
      queryClient.invalidateQueries({ queryKey: ["standardJobs"] });
    },
  });

  const addNewJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
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
            uploading={uploading}
            setUploading={setUploading}
          />
        </div>
        <div>
          <JobSettings
            jobDeadline={jobDeadline}
            setJobDeadline={setJobDeadline}
            isVip={isVip}
            setIsVip={setIsVip}
            jobCategoryType={jobCategoryType}
            setJobCategoryType={setJobCategoryType}
          />
        </div>
      </div>
      <div>
        <AddJobBtn uploading={uploading} />
      </div>
      {/* Markdown Preview */}
      <MarkdownPreview
        jobDescription={jobDescription}
        jobComment={jobComment}
        jobTitle={jobTitle}
        jobCompanyName={jobCompanyName}
        jobPublishDate={new Date().toLocaleString()}
        jobDeadline={jobDeadline}
      />
    </form>
  );
};

export default PostingAdForm;
