type JobDescTypes = {
  jobDescription: string;
  setJobDescription: (val: string) => void;
};
const JobDescription = ({
  jobDescription,
  setJobDescription,
}: JobDescTypes) => {
  const handleSetJobDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJobDescription(e.target.value);
  };
  return (
    <div>
      <textarea
        onChange={handleSetJobDescription}
        value={jobDescription}
        placeholder="ვაკანსიის აღწერა"
        className="px-2 py-3 w-full outline-none border 
      text-black
      border-gray-400 bg-gray-300 rounded-md
      focus:border-primary focus:bg-white transition-all ease-in duration-150"
      />
    </div>
  );
};

export default JobDescription;
