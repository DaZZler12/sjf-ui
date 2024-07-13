// This file is responsible for defining the state and actions for the SJF algorithm
// in the Redux store. It uses the createSlice function from Redux Toolkit to create a slice of the store
// that contains the state and actions for the SJF algorithm. The initialState object defines the initial state of the slice,
// and the sjfSlice object defines the name of the slice and the reducers for updating the state.
// The sjfActions object contains the action creators for the reducers, and the sjfReducer function is the reducer function for the slice.
// This file is then imported into the rootReducer file to combine the SJF slice with other slices in the store.
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
  id: string;
  name: string;
  duration: number;
}

interface SJFState {
  jobs: Job[];
}

const initialState: SJFState = {
  jobs: [],
};

export const sjfSlice = createSlice({
  name: "sjf",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action: PayloadAction<string>) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    setSJFData: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { actions: sjfActions, reducer: sjfReducer } = sjfSlice;
