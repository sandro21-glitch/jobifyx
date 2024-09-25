import { useEffect } from "react";
import JobListing from "../../../ui/jobListing/JobListing";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchVipJobs } from "../../../slices/jobSlice/jobThunks";

const VipJobs = () => {
  const dispatch = useAppDispatch();

  const { data, error, loading } = useAppSelector(
    (store) => store.jobs.vipJobs
  );

  useEffect(() => {
    dispatch(fetchVipJobs());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return <JobListing jobs={data ? data : []} />;
};

export default VipJobs;
