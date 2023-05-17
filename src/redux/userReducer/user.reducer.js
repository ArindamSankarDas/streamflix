import { setUser, removeUser } from "./user.actions";

const setUserCredentials = setUser();
const removeUserCredentials = removeUser();

const INITIAL_STATE = null;

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case setUserCredentials.type:
      return action.payload;

    case removeUserCredentials.type:
      return action.payload;

    default:
      return state;
  }
};
