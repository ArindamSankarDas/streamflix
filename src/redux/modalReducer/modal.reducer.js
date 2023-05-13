import { openModal, closeModal } from "./modal.actions";

const INITIAL_STATE = null;

const open_modal = openModal();
const close_modal = closeModal();

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case open_modal.type:
      return action.payload;
    case close_modal.type:
      return action.payload;
    default:
      return state;
  }
};
