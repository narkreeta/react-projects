import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
