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
      } font-medium lg:col-span-2 text-end md:text-center
       relative flex flex-row-reverse items-center justify-start md:justify-center gap-3`}
    >
      <span className="max-w-[5rem] md:max-w-full">{companyName}</span>
      <img
        src={companyImage}
        alt={`${companyImage} logo`}
        // className="absolute left-16 top-0 hidden md:block"
        loading="lazy"
      />
    </li>
  );
};

export default JobCompany;
