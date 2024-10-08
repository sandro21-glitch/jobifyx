import Input from "../../../../../ui/Input";

type CompanyNumberTypes = {
  jobCompanyNumber: number;
  setCompanyNumber: (val: number) => void;
};

const CompanyNumber = ({
  jobCompanyNumber,
  setCompanyNumber,
}: CompanyNumberTypes) => {
  const handleSetCompanyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyNumber(Number(e.target.value));
  };

  return (
    <div>
      <Input
        inputFieldType="text"
        inputValue={jobCompanyNumber === 0 ? "" : String(jobCompanyNumber)}
        onChange={handleSetCompanyNumber}
        placeholder="ტელეფონი"
      />
    </div>
  );
};

export default CompanyNumber;
