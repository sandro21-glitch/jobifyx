import VipJobList from "./VipJobList";
import VipJobsHeader from "./VipJobsHeader";

const VipJobs = () => {
  return (
    <div className="mt-5">
      {/* header */}
      <VipJobsHeader />
      {/* vip jobs */}
      <VipJobList />
      <VipJobList />
      <VipJobList />
      <VipJobList />
      <VipJobList />
    
    </div>
  );
};

export default VipJobs;
