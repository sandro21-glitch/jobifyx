type JobCompanyTypes = {
  companyName: string;
  companyImage: string;
};

const JobCompany = ({ companyImage, companyName }: JobCompanyTypes) => {
  return (
    <li className="col-span-2 relative">
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
