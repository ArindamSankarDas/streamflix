import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer/modal.reducer";
import userReducer from "./userReducer/user.reducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});
