import JobStatus from "./JobStatus";
import JobDeadlineStatus from "./JobDeadlineStatus";
import JobType from "./JobType";

type JobSettingTypes = {
  jobDeadline: string;
  setJobDeadline: (val: string) => void;
  isVip: boolean;
  setIsVip: (val: boolean) => void;
  jobCategoryType: string;
  setJobCategoryType: (val: string) => void;
};

const JobSettings = ({
  jobDeadline,
  setJobDeadline,
  isVip,
  setIsVip,
  jobCategoryType,
  setJobCategoryType,
}: JobSettingTypes) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[1.2rem] font-medium text-left lg:text-center">
        სამუშაოს პარამეტრები
      </h4>
      <JobDeadlineStatus
        jobDeadline={jobDeadline}
        setJobDeadline={setJobDeadline}
      />
      <JobStatus isVip={isVip} setIsVip={setIsVip} />
      <JobType
        jobCategoryType={jobCategoryType}
        setJobCategoryType={setJobCategoryType}
      />
    </div>
  );
};

export default JobSettings;
