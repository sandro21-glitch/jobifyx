import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import JobListing from "../../../ui/jobListing/JobListing";
import { fetchNonVipJobs } from "../../../slices/jobSlice/jobThunks";

const StandardJobListings = () => {
  const { data, error, loading } = useAppSelector(
    (store) => store.jobs.standardJobs
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNonVipJobs());
  }, [dispatch]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return <JobListing jobs={data ? data : []} />;
};

export default StandardJobListings;
