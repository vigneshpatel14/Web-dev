import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import default counterSlice reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Attach counterReducer
  },
});

export default store;
