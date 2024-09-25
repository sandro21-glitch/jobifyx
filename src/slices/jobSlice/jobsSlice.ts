import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";
import { addJobToDatabase, fetchVipJobs } from "./jobThunks";
import { jobTypes } from "../../constants/JobTypesList";

interface JobsState {
  vipJobs: {
    data: JobTypes[] | null;
    loading: boolean;
    error: string | null;
  };
  addJob: {
    loading: boolean;
    error: string | null;
  };
}

const initialState: JobsState = {
  vipJobs: {
    data: [],
    loading: false,
    error: null,
  },
  addJob: {
    error: null,
    loading: false,
  },
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addJobToDatabase.pending, (state) => {
        state.addJob.loading = true;
        state.addJob.error = null;
      })
      .addCase(addJobToDatabase.fulfilled, (state) => {
        state.addJob.loading = false;
      })
      .addCase(addJobToDatabase.rejected, (state, action) => {
        state.addJob.loading = false;
        state.addJob.error = action.payload as string;
      });
    builder
      .addCase(fetchVipJobs.pending, (state) => {
        state.vipJobs.loading = true;
      })
      .addCase(
        fetchVipJobs.fulfilled,
        (state, action: PayloadAction<JobTypes[]>) => {
          state.vipJobs.loading = false;
          state.vipJobs.data = action.payload;
        }
      )
      .addCase(fetchVipJobs.rejected, (state, action) => {
        state.vipJobs.loading = false;
        state.vipJobs.error = (action.payload as string) || "rejected";
      });
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
