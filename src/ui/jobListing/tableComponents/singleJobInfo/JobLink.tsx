import { BiSolidStar, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import JobBadges from "./jobLinkContent/JobBadges";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  addFavoriteJobs,
  removeFavoriteJobs,
} from "../../../../slices/jobSlice/jobsSlice";

type JobLinkTypes = {
  jobTitle: string;
  jobId: string;
  jobPublishDate: string;
  isVip: boolean;
};

const JobLink = ({ jobTitle, isVip, jobPublishDate, jobId }: JobLinkTypes) => {
  const favJobs = useAppSelector((store) => store.jobs.favoriteJobs);

  // Parse the jobPublishDate using Date constructor
  const publishDate = new Date(jobPublishDate);

  // Check if the date is valid
  if (isNaN(publishDate.getTime())) {
    console.error("Invalid Date:", jobPublishDate);
    return null;
  }

  // check if the job is new (published within the last 5 days)
  const isNewJob =
    (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24) <= 5;

  const isJobSaved = favJobs.find((job) => job.jobId === jobId);

  const dispatch = useAppDispatch();
  const handleAddFavoriteJob = () => {
    if (isJobSaved) {
      dispatch(removeFavoriteJobs(jobId));
    } else {
      dispatch(addFavoriteJobs(jobId));
    }
  };

  return (
    <li className="lg:col-span-3 col-span-1 relative flex items-center">
      <button
        onClick={handleAddFavoriteJob}
        className="absolute -left-5 text-gray-500 text-[16px] mr-5"
      >
        {isJobSaved ? <BiSolidStar className="text-yellow-500" /> : <BiStar />}
      </button>
      <Link
        to={`/ad/${jobId}`}
        state={jobId}
        className={`${isVip ? "text-primary" : "text-gray-500"} font-medium`}
      >
        {jobTitle}
      </Link>
      <JobBadges isVip={isVip} isNewJob={isNewJob} />
    </li>
  );
};

export default JobLink;
