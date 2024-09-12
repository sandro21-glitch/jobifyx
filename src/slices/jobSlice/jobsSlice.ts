import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobTypes } from "./jobTypes";

interface JobsState {
  jobs: JobTypes[] | null;
}

const initialState: JobsState = {
  jobs: null,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
