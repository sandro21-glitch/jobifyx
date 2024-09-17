import CompanyName from "./CompanyName";
import CompanyMail from "./CompanyMail";
import CompanyNumber from "./CompanyNumber";

type CompanyInfoTypes = {
  jobCompanyName: string;
  setJobCompanyName: (val: string) => void;
  jobCompanyMail: string;
  setJobCompanyMail: (val: string) => void;
  jobCompanyNumber: number;
  setCompanyNumber: (val: number) => void;
};

const CompanyInfo = ({
  jobCompanyName,
  setJobCompanyName,
  jobCompanyMail,
  setJobCompanyMail,
  jobCompanyNumber,
  setCompanyNumber,
}: CompanyInfoTypes) => {
  return (
    <div className="flex flex-col gap-5">
      <CompanyName
        jobCompanyName={jobCompanyName}
        setJobCompanyName={setJobCompanyName}
      />
      <CompanyMail
        jobCompanyMail={jobCompanyMail}
        setJobCompanyMail={setJobCompanyMail}
      />
      <CompanyNumber
        jobCompanyNumber={jobCompanyNumber}
        setCompanyNumber={setCompanyNumber}
      />
    </div>
  );
};

export default CompanyInfo;
