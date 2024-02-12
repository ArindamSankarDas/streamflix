import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

// export const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case setUserCredentials.type:
//       return action.payload;

//     case removeUserCredentials.type:
//       return action.payload;

//     default:
//       return state;
//   }
// };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      action.payload;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
