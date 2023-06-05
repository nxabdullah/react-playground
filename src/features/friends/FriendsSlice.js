import { createSlice } from "@reduxjs/toolkit";
import { FriendsData } from "../../app/FakeData";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: { value: FriendsData },
  reducers: {
    addFriend: (state, action) => {
      state.value.push(action.payload);
    },
    deleteFriend: (state, action) => {
      state.value = state.value.filter(
        (friend) => friend.id !== action.payload.id
      );
    },
    updatePhoneNumber: (state, action) => {
      state.value.map((friend) => {
        if (friend.id === action.payload.id) {
          friend.phoneNumber = action.payload.phoneNumber;
        }
      });
    },
  },
});

// these are the actions we will export
export const { addFriend, deleteFriend, updatePhoneNumber } =
  friendsSlice.actions;

// this is the default thing we export - the reducer
export default friendsSlice.reducer;
