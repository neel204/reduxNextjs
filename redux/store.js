import counterSlice from "@/features/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { counter: counterSlice },
});
