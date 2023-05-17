import { combineReducers } from "redux";
import { userReducer } from "./userReducer/user.reducer";
import { modalReducer } from "./modalReducer/modal.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});
