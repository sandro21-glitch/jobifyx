import { createSlice } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";
import { addJobToDatabase } from "./jobThunks";

interface JobsState {
  jobs: JobTypes[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: JobsState = {
  jobs: [],
  error: null,
  loading: false,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addJobToDatabase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addJobToDatabase.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs?.push(action.payload.job);
      })
      .addCase(addJobToDatabase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
