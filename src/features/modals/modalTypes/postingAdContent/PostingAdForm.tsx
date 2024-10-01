import { useState } from "react";
import { nanoid } from "nanoid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../../../../hooks";
import { addJobToDatabase } from "../../../../slices/jobSlice/jobThunks";
import { JobTypes } from "../../../../slices/jobSlice/jobTypes";
import AddJobBtn from "./AddJobBtn";
import JobFormLayout from "./JobFormLayout";

const PostingAdForm = () => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobCompanyName, setJobCompanyName] = useState<string>("");
  const [jobCompanyMail, setJobCompanyMail] = useState<string>("");
  const [jobComment, setJobComment] = useState<string>("");
  const [jobCompanyNumber, setCompanyNumber] = useState<number>(0);
  const [jobCompanyImage, setJobCompanyImage] = useState<string>("");
  const [jobDeadline, setJobDeadline] = useState<string>("1 თვე");
  const [isVip, setIsVip] = useState<boolean>(false);
  const [jobCategoryType, setJobCategoryType] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [qualifications, setQualifications] = useState<string[]>([]);

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
    jobCategory: jobCategoryType,
    qualifications,
    responsibilities,
  };

  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => dispatch(addJobToDatabase(job)),
    onSuccess: () => {
      // refetch VIP and standard jobs
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
      <JobFormLayout
        jobCompanyName={jobCompanyName}
        setJobCompanyName={setJobCompanyName}
        jobCompanyMail={jobCompanyMail}
        setJobCompanyMail={setJobCompanyMail}
        jobCompanyNumber={jobCompanyNumber}
        setCompanyNumber={setCompanyNumber}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        jobComment={jobComment}
        setJobComment={setJobComment}
        setJobCompanyImage={setJobCompanyImage}
        uploading={uploading}
        setUploading={setUploading}
        jobDeadline={jobDeadline}
        setJobDeadline={setJobDeadline}
        isVip={isVip}
        setIsVip={setIsVip}
        jobCategoryType={jobCategoryType}
        setJobCategoryType={setJobCategoryType}
        responsibilities={responsibilities}
        setResponsibilities={setResponsibilities}
        qualifications={qualifications}
        setQualifications={setQualifications}
      />
      <div>
        <AddJobBtn uploading={uploading} />
      </div>
    </form>
  );
};

export default PostingAdForm;
