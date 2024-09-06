type JobCompanyTypes = {
  companyName: string;
  companyImage: string;
  isVip: boolean;
};

const JobCompany = ({ companyImage, companyName, isVip }: JobCompanyTypes) => {
  return (
    <li
      className={`${
        isVip ? "text-primary" : "text-gray-500"
      } font-medium col-span-2 relative`}
    >
      {companyName}
      <img
        src={companyImage}
        alt={`${companyImage} logo`}
        className="absolute -left-16 top-0"
        loading="lazy"
      />
    </li>
  );
};

export default JobCompany;
