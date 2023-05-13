import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer/modal.reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
});
