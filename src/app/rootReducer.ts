// This file is used to combine all the reducers in the application.
// rootReducer is then used in the store configuration.
// API reducer is also added to the rootReducer.
// API middleware is added to the store middleware.
// setupListeners function is called with the store.dispatch function.
// This is used to set up the listeners for the API actions.
// setupListeners function is called after the store is created.
// This is done to ensure that the listeners are set up correctly.

import { combineReducers } from "@reduxjs/toolkit";
import { sjfReducer } from "../features/redux/sjfslice";
import { sjfApi } from "../features/apis/sjfApis";

const rootReducer = combineReducers({
  sjf: sjfReducer,
  // Add the API reducer to the root reducer
  [sjfApi.reducerPath]: sjfApi.reducer,
  // Other reducers go here
});

export default rootReducer;
