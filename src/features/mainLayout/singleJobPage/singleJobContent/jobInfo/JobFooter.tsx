type JobFooterTypes = {
  jobCompanyMail: string;
  jobTitle: string;
};

const JobFooter = ({ jobCompanyMail, jobTitle }: JobFooterTypes) => {
  return (
    <p className="text-[14px] font-medium text-gray-500 mt-10">
      დაინტერესებულმა პირებმა გთხოვთ გამოაგზავნოთ CV ელექტრონულ ფოსტაზე
      <span className="text-primary font-bold mx-1">{jobCompanyMail}</span>.
      გთხოვთ, სათაურის ველში მიუთითოთ პოზიციის დასახელება "{jobTitle}"
    </p>
  );
};

export default JobFooter;
