// Async thunk for adding a new job

import { equalTo, get, orderByChild, query, ref, set } from "firebase/database";
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
    };

    await set(ref(database, `jobs/${newJobId}`), newJob);
    console.log("Job added successfully:", newJob);

    return { job: newJob };
  } catch (error: any) {
    console.error("Error adding job:", error.message);
    return rejectWithValue(error.message || "Error adding job to the database");
  }
});

// Fetch VIP jobs
export const fetchVipJobs = createAsyncThunk<
  JobTypes[],
  void,
  { rejectValue: string }
>("jobs/fetchVipJobs", async (_, { rejectWithValue }) => {
  try {
    const vipJobsRef = query(
      ref(database, "jobs"),
      orderByChild("isVip"),
      equalTo(true)
    );

    const snapshot = await get(vipJobsRef);

    if (!snapshot.exists()) {
      return [];
    }

    const jobs: JobTypes[] = [];
    snapshot.forEach((childSnapshot) => {
      const job = childSnapshot.val();
      jobs.push(job);
    });

    return jobs;
  } catch (error: any) {
    console.error("Error fetching VIP jobs:", error.message);
    return rejectWithValue(error.message || "Error fetching VIP jobs");
  }
});

// Fetch Non-VIP jobs
export const fetchNonVipJobs = createAsyncThunk<
  JobTypes[],
  void,
  { rejectValue: string }
>("jobs/fetchNonVipJobs", async (_, { rejectWithValue }) => {
  try {
    const nonVipJobsRef = query(
      ref(database, "jobs"),
      orderByChild("isVip"),
      equalTo(false)
    );

    const snapshot = await get(nonVipJobsRef);

    if (!snapshot.exists()) {
      return [];
    }

    const jobs: JobTypes[] = [];
    snapshot.forEach((childSnapshot) => {
      const job = childSnapshot.val();
      jobs.push(job);
    });

    return jobs;
  } catch (error: any) {
    console.error("Error fetching non-VIP jobs:", error.message);
    return rejectWithValue(error.message || "Error fetching non-VIP jobs");
  }
});
