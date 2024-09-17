import Input from "../../../../../ui/Input";

type AdNameTypes = {
  jobTitle: string;
  setJobTitle: (val: string) => void;
};

const AdName = ({ jobTitle, setJobTitle }: AdNameTypes) => {
  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(e.target.value);
  };
  return (
    <div>
      <Input
        onChange={handleSetTitle}
        inputValue={jobTitle}
        inputFieldType="text"
        placeholder="განცხადების დასახელება"
      />
    </div>
  );
};

export default AdName;
