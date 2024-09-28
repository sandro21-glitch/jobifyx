import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";
import { addJobToDatabase, fetchNonVipJobs, fetchVipJobs } from "./jobThunks";

interface JobsState {
  vipJobs: {
    data: JobTypes[] | null;
    loading: boolean;
    error: string | null;
  };
  standardJobs: {
    data: JobTypes[] | null;
    loading: boolean;
    error: string | null;
  };
  allJob: JobTypes[] | null;
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
  standardJobs: {
    data: [],
    loading: false,
    error: null,
  },
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
    builder
      .addCase(fetchVipJobs.pending, (state) => {
        state.vipJobs.loading = true;
      })
      .addCase(
        fetchVipJobs.fulfilled,
        (state, action: PayloadAction<JobTypes[]>) => {
          state.vipJobs.loading = false;
          state.vipJobs.data = action.payload;
          if (Array.isArray(state.allJob)) {
            state.allJob.push(...action.payload);
          } else {
            state.allJob = [...action.payload];
          }
        }
      )
      .addCase(fetchVipJobs.rejected, (state, action) => {
        state.vipJobs.loading = false;
        state.vipJobs.error = (action.payload as string) || "rejected";
      });
    builder
      .addCase(fetchNonVipJobs.pending, (state) => {
        state.standardJobs.loading = true;
      })
      .addCase(
        fetchNonVipJobs.fulfilled,
        (state, action: PayloadAction<JobTypes[]>) => {
          state.standardJobs.loading = false;
          state.standardJobs.data = action.payload;
          if (Array.isArray(state.allJob)) {
            state.allJob.push(...action.payload);
          } else {
            state.allJob = [...action.payload];
          }
        }
      )
      .addCase(fetchNonVipJobs.rejected, (state, action) => {
        state.standardJobs.loading = false;
        state.standardJobs.error = (action.payload as string) || "rejected";
      });
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
