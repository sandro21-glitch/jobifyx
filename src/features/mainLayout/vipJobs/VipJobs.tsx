import CompanyJobsList from "../companyJobs/CompanyJobsList";
import VipJobList from "./VipJobList";
import VipJobsHeader from "./VipJobsHeader";

const VipJobs = () => {
  return (
    <div className="mt-5">
      {/* header */}
      <VipJobsHeader />
      {/* vip jobs */}
      <VipJobList />
      {/* company jobs */}
      <CompanyJobsList />
    </div>
  );
};

export default VipJobs;
