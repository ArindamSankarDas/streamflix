import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      console.log(action);
      return action.payload;
    },

    closeModal(state, action) {
      console.log(action);
      return action.payload;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
