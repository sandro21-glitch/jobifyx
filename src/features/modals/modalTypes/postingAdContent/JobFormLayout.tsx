import AdDetailsInputs from "./adDetailsInputs/AdDetailsInputs";
import CompanyInfo from "./companyInfoInputs/CompanyInfo";
import JobSettings from "./jobSettings/JobSettings";

type JobFormLayoutTypes = {
  jobCompanyName: string;
  setJobCompanyName: (value: string) => void;
  jobCompanyMail: string;
  setJobCompanyMail: (value: string) => void;
  jobCompanyNumber: number;
  setCompanyNumber: (value: number) => void;
  jobTitle: string;
  setJobTitle: (value: string) => void;
  jobComment: string;
  setJobComment: (value: string) => void;
  setJobCompanyImage: (image: string) => void;
  uploading: boolean;
  setUploading: (value: boolean) => void;
  jobDeadline: string;
  setJobDeadline: (date: string) => void;
  isVip: boolean;
  setIsVip: (value: boolean) => void;
  jobCategoryType: string;
  setJobCategoryType: (value: string) => void;
  responsibilities: string[];
  setResponsibilities: (value: string[]) => void;
  qualifications: string[];
  setQualifications: (value: string[]) => void;
};
const JobFormLayout = ({
  isVip,
  jobCategoryType,
  jobComment,
  jobCompanyMail,
  jobCompanyName,
  jobCompanyNumber,
  jobDeadline,
  jobTitle,
  setCompanyNumber,
  setIsVip,
  setJobCategoryType,
  setJobComment,
  setJobCompanyImage,
  setJobCompanyMail,
  setJobCompanyName,
  setJobDeadline,
  setJobTitle,
  setUploading,
  uploading,
  responsibilities,
  setResponsibilities,
  qualifications,
  setQualifications,
}: JobFormLayoutTypes) => {
  return (
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
          setJobCompanyImage={setJobCompanyImage}
          uploading={uploading}
          setUploading={setUploading}
          responsibilities={responsibilities}
          setResponsibilities={setResponsibilities}
          qualifications={qualifications}
          setQualifications={setQualifications}
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
  );
};

export default JobFormLayout;
