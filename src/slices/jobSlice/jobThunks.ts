// Async thunk for adding a new job

import { ref, set } from "firebase/database";
import { JobTypes } from "./jobTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../config/firebase";
import { nanoid } from "nanoid";

// Thunk to add a job with an empty image string
export const addJobToDatabase = createAsyncThunk<
  { job: JobTypes },
  { job: Omit<JobTypes, "jobId"> }
>("jobs/addJobToDatabase", async (payload, { rejectWithValue }) => {
  const { job } = payload;

  try {
    // Generate a new key and set the job data
    const newJobId = nanoid();
    if (!newJobId) {
      throw new Error("Failed to generate a new job ID");
    }

    const newJob: JobTypes = {
      ...job,
      jobId: newJobId,
      jobCompanyImage: "",
    };

    await set(ref(database, `jobs/${newJobId}`), newJob);
    console.log("Job added successfully:", newJob);

    return { job: newJob };
  } catch (error: any) {
    console.error("Error adding job:", error.message);
    return rejectWithValue(error.message || "Error adding job to the database");
  }
});
