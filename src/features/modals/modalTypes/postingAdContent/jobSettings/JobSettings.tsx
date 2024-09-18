import JobStatus from "./JobStatus";
import JobDeadlineStatus from "./JobDeadlineStatus";

const JobSettings = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <h4 className="text-[1.2rem] font-medium text-center">
        სამუშაოს პარამეტრები
      </h4>
      <JobDeadlineStatus />
      <JobStatus />
    </div>
  );
};

export default JobSettings;
