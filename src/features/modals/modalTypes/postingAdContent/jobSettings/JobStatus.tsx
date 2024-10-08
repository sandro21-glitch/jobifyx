type JobStatusTypes = {
  isVip: boolean;
  setIsVip: (val: boolean) => void;
};

const JobStatus = ({ isVip, setIsVip }: JobStatusTypes) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVip(e.target.checked);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={isVip}
        className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300  cursor-pointer"
      >
        Vip რეკლამა
      </label>
    </div>
  );
};

export default JobStatus;
