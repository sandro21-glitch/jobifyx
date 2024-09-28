import JobListing from "../../../ui/jobListing/JobListing";
import { fetchVipJobs } from "../../../slices/jobSlice/jobThunks";
import { useQuery } from "@tanstack/react-query";
import { JobTypes } from "../../../slices/jobSlice/jobTypes";
import { useAppDispatch } from "../../../hooks";

const VipJobs = () => {
  const dispatch = useAppDispatch();

  const {
    data = [],
    error,
    isLoading,
  } = useQuery<JobTypes[], Error>({
    queryKey: ["vipJobs"],
    queryFn: async () => {
      const result = await dispatch(fetchVipJobs());
      if (fetchVipJobs.fulfilled.match(result)) {
        return result.payload;
      }
      throw new Error(result.error?.message || "Failed to fetch jobs");
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <JobListing jobs={data || []} />;
};

export default VipJobs;
