import CompanyName from "./CompanyName";
import CompanyMail from "./CompanyMail";
import CompanyNumber from "./CompanyNumber";

const CompanyInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <CompanyName />
      <CompanyMail />
      <CompanyNumber />
    </div>
  );
};

export default CompanyInfo;
