import { configureStore } from "@reduxjs/toolkit";
import giftData from "./slices/giftData";

export const store = configureStore({
  reducer: {
    giftData,
  },
});
