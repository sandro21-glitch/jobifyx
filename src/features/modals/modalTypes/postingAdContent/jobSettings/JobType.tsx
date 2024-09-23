import { jobTypes } from "../../../../../constants/JobTypesList";

type JobCategoryTypes = {
  jobCategoryType: string;
  setJobCategoryType: (val: string) => void;
};

const JobType = ({ jobCategoryType, setJobCategoryType }: JobCategoryTypes) => {
  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobCategoryType(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="job-duration"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        აირჩიეთ სამუშაოს კატეგორია
      </label>
      <select
        id="job-duration"
        value={jobCategoryType}
        onChange={handleChangeCategory}
        className="block w-full px-4 text-xs py-2 border border-gray-300 rounded-md focus:outline-none focus:ring outline-none focus:ring-primary focus:border-primary"
      >
        {jobTypes.map((type) => {
          return (
            <option value={type.type} key={type.id}>
              {type.type}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default JobType;
