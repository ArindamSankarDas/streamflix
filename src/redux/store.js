import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer/modal.reducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
