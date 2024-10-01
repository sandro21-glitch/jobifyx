import AdComment from "./AdComment";
import AdName from "./AdName";
import CompanyImage from "./CompanyImage";
import QualificationsForm from "./QualificationsForm";
import ResponsibilitiesForm from "./ResponsibilitiesForm";

type AdDetailsInputTypes = {
  jobTitle: string;
  setJobTitle: (val: string) => void;
  jobComment: string;
  setJobComment: (val: string) => void;
  responsibilities: string[];
  setResponsibilities: (value: string[]) => void;
  qualifications: string[];
  setQualifications: (value: string[]) => void;
  setJobCompanyImage: (val: string) => void;
  setUploading: (val: boolean) => void;
  uploading: boolean;
};
const AdDetailsInputs = ({
  jobTitle,
  setJobTitle,
  jobComment,
  setJobComment,
  setJobCompanyImage,
  setUploading,
  uploading,
  responsibilities,
  setResponsibilities,
  qualifications,
  setQualifications,
}: AdDetailsInputTypes) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[1.2rem] font-medium text-left lg:text-center">
        განცხადების ტიპის დასახელება
      </h4>
      <AdName jobTitle={jobTitle} setJobTitle={setJobTitle} />
      <AdComment jobComment={jobComment} setJobComment={setJobComment} />
      <CompanyImage
        setJobCompanyImage={setJobCompanyImage}
        uploading={uploading}
        setUploading={setUploading}
      />
      <ResponsibilitiesForm
        responsibilities={responsibilities}
        setResponsibilities={setResponsibilities}
      />
      <QualificationsForm
        qualifications={qualifications}
        setQualifications={setQualifications}
      />
    </div>
  );
};

export default AdDetailsInputs;
