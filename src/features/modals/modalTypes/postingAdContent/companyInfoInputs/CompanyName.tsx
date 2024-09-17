import Input from "../../../../../ui/Input";

type CompanyNameTypes = {
  jobCompanyName: string;
  setJobCompanyName: (val: string) => void;
};
const CompanyName = ({
  jobCompanyName,
  setJobCompanyName,
}: CompanyNameTypes) => {
  const handleSetCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobCompanyName(e.target.value);
  };

  return (
    <div>
      <Input
        inputFieldType="text"
        inputValue={jobCompanyName}
        onChange={handleSetCompanyName}
        placeholder="კომპანიის დასახელება"
      />
    </div>
  );
};

export default CompanyName;
