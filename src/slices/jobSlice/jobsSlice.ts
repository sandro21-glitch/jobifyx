import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";
import { addJobToDatabase, fetchNonVipJobs, fetchVipJobs } from "./jobThunks";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorageUtils";

const FAVORITE_JOBS_KEY = "favoriteJobs";

interface JobsState {
  vipJobs: JobTypes[] | null;
  standardJobs: JobTypes[] | null;
  allJob: JobTypes[] | null;
  addJob: {
    loading: boolean;
    error: string | null;
  };
  favoriteJobs: JobTypes[];
}

const initialState: JobsState = {
  vipJobs: null,
  standardJobs: null,
  allJob: [],
  addJob: {
    error: null,
    loading: false,
  },
  favoriteJobs: loadFromLocalStorage<JobTypes[]>(FAVORITE_JOBS_KEY) || [],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addFavoriteJobs: (state, action: PayloadAction<string>) => {
      const currJob = state.allJob?.find((job) => job.jobId === action.payload);
      if (currJob) {
        state.favoriteJobs?.push(currJob);
        // Save updated favorite jobs to localStorage
        saveToLocalStorage(FAVORITE_JOBS_KEY, state.favoriteJobs);
      }
    },
    removeFavoriteJobs: (state, action: PayloadAction<string>) => {
      const currJob = state.allJob?.find((job) => job.jobId === action.payload);
      if (currJob) {
        state.favoriteJobs =
          state.favoriteJobs?.filter((job) => job.jobId !== action.payload) ||
          [];
        // Save updated favorite jobs to localStorage
        saveToLocalStorage(FAVORITE_JOBS_KEY, state.favoriteJobs);
      }
    },
  },
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

export const { addFavoriteJobs, removeFavoriteJobs } = jobSlice.actions;

export default jobSlice.reducer;
