import Modals from "../modals/Modals";
import CompanyJobsList from "./companyJobs/CompanyJobsList";
import StandardJobListings from "./standardJobsListing/StandardJobListings";
import VipJobs from "./vipJobs/VipJobs";
import { useAppDispatch } from "../../hooks";
import { addJobToDatabase } from "../../slices/jobSlice/jobThunks";
import { JobTypes } from "../../slices/jobSlice/jobTypes";

const HomePage = () => {
  const job: Omit<JobTypes, "jobId"> = {
    jobTitle: "Test Job Title",
    jobCompanyName: "Test Company",
    jobCompanyImage: "IMAGE",
    jobPublishDate: "testiong",
    jobDeadline: "testiong",
    isVip: false,
  };

  const dispatch = useAppDispatch();

  return (
    <section className="section-center">
      <VipJobs />
      {/* company jobs */}
      <CompanyJobsList />
      {/* standard jobs */}
      <StandardJobListings />
      {/* modals */}
      <Modals />
      <button onClick={() => dispatch(addJobToDatabase({ job }))}>
        ADDDDDD
      </button>
    </section>
  );
};

export default HomePage;
