import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";
import { addJobToDatabase, fetchNonVipJobs, fetchVipJobs } from "./jobThunks";

interface JobsState {
  vipJobs: JobTypes[] | null;
  standardJobs: JobTypes[] | null;
  allJob: JobTypes[] | null;
  addJob: {
    loading: boolean;
    error: string | null;
  };
}

const initialState: JobsState = {
  vipJobs: null,
  standardJobs: null,
  allJob: [],
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
    builder.addCase(
      fetchVipJobs.fulfilled,
      (state, action: PayloadAction<JobTypes[]>) => {
        state.vipJobs = action.payload;
        if (Array.isArray(state.allJob)) {
          state.allJob.push(...action.payload);
        } else {
          state.allJob = [...action.payload];
        }
      }
    );
    builder.addCase(
      fetchNonVipJobs.fulfilled,
      (state, action: PayloadAction<JobTypes[]>) => {
        state.standardJobs = action.payload;
        if (Array.isArray(state.allJob)) {
          state.allJob.push(...action.payload);
        } else {
          state.allJob = [...action.payload];
        }
      }
    );
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
