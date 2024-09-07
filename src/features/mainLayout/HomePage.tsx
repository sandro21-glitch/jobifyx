import Modals from "../modals/Modals";
import CompanyJobsList from "./companyJobs/CompanyJobsList";
import StandardJobListings from "./standardJobsListing/StandardJobListings";
import VipJobs from "./vipJobs/VipJobs";

const HomePage = () => {
  return (
    <section className="section-center">
      <VipJobs />
      {/* company jobs */}
      <CompanyJobsList />
      {/* standard jobs */}
      <StandardJobListings />
      {/* modals */}
      <Modals />
    </section>
  );
};

export default HomePage;
