// This file is used to create the Redux store and set up the API middleware
// and listeners. The rootReducer is imported and used to configure the store
// with the combined reducers. The sjfApi.middleware is added to the store
// middleware to handle API requests. The setupListeners function is called
// with the store.dispatch function to set up the listeners for the API actions.
// This is done after the store is created to ensure that the listeners are set up correctly.
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import rootReducer from "./rootReducer"; // Import the combined reducers
import { sjfApi } from "../features/apis/sjfApis";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sjfApi.middleware /* Other middlewares */),
});

setupListeners(store.dispatch);
