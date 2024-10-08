
import CompanyJobsList from "./companyJobs/CompanyJobsList";
import StandardJobListings from "./standardJobsListing/StandardJobListings";
import VipJobs from "./vipJobs/VipJobs";
import Filters from "../filters/Filters";

const HomePage = () => {
  return (
    <section className="section-center">
      {/* page filters */}
      <Filters />
      {/* vip jobs */}
      <VipJobs />
      {/* company jobs */}
      <CompanyJobsList />
      {/* standard jobs */}
      <StandardJobListings />
    </section>
  );
};

export default HomePage;
