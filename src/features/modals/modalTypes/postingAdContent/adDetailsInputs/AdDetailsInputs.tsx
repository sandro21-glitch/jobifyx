import AdComment from "./AdComment";
import AdName from "./AdName";
import CompanyImage from "./CompanyImage";
import JobDescription from "./JobDescription";

type AdDetailsInputTypes = {
  jobTitle: string;
  setJobTitle: (val: string) => void;
  jobComment: string;
  setJobComment: (val: string) => void;
  jobDescription: string;
  setJobDescription: (val: string) => void;
  setJobCompanyImage: (val: string) => void;
  setUploading: (val: boolean) => void;
  uploading: boolean;
};
const AdDetailsInputs = ({
  jobTitle,
  setJobTitle,
  jobComment,
  setJobComment,
  jobDescription,
  setJobDescription,
  setJobCompanyImage,
  setUploading,
  uploading,
}: AdDetailsInputTypes) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[1.2rem] font-medium text-left lg:text-center">
        განცხადების ტიპის დასახელება
      </h4>
      <AdName jobTitle={jobTitle} setJobTitle={setJobTitle} />
      <AdComment jobComment={jobComment} setJobComment={setJobComment} />
      <JobDescription
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
      />
      <CompanyImage
        setJobCompanyImage={setJobCompanyImage}
        uploading={uploading}
        setUploading={setUploading}
      />
    </div>
  );
};

export default AdDetailsInputs;
