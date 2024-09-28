import { useAppDispatch } from "../../../hooks";
import JobListing from "../../../ui/jobListing/JobListing";
import { fetchNonVipJobs } from "../../../slices/jobSlice/jobThunks";
import { useQuery } from "@tanstack/react-query";
import { JobTypes } from "../../../slices/jobSlice/jobTypes";

const StandardJobListings = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useQuery<JobTypes[], Error>({
    queryKey: ["standardJobs"],
    queryFn: async () => {
      const res = await dispatch(fetchNonVipJobs());
      if (fetchNonVipJobs.fulfilled.match(res)) {
        return res.payload;
      }
      throw new Error(res.error?.message || "Failed to fetch jobs");
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return <JobListing jobs={data || []} />;
};

export default StandardJobListings;
