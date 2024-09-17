import Input from "../../../../../ui/Input";

type CompanyMailTypes = {
  jobCompanyMail: string;
  setJobCompanyMail: (val: string) => void;
};

const CompanyMail = ({
  jobCompanyMail,
  setJobCompanyMail,
}: CompanyMailTypes) => {
  const handleSetCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobCompanyMail(e.target.value);
  };
  return (
    <div>
      <Input
        onChange={handleSetCompanyName}
        inputValue={jobCompanyMail}
        inputFieldType="email"
        placeholder="კომპანიის ელ-ფოსტა"
      />
    </div>
  );
};

export default CompanyMail;
