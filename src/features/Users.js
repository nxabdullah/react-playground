// https://github.com/machadop1407/redux-crud-react/blob/master/src/features/Users.js
import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    // state is the current state. This is how we can access it inside the reducer.
    // action is the action that was dispatched.
    addUser: (state, action) => {
      // All the code for adding the user
      // to the state goes here.
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      // set the state to an array that does not contain the user with the id
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateName: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateName } = usersSlice.actions;
export default usersSlice.reducer;
