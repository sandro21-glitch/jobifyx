import { useAppSelector } from "../../../hooks";
import JobListing from "../../../ui/jobListing/JobListing";

const FavoriteJobs = () => {
  const favJobsList = useAppSelector((store) => store.jobs.favoriteJobs);

  return (
    <section className="section-center">
      <JobListing jobs={favJobsList} isFav />
    </section>
  );
};

export default FavoriteJobs;
