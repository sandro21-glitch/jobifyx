import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobsState {}

const initialState: JobsState = {};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const {} = jobSlice.actions;

export default jobSlice.reducer;
