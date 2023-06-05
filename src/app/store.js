import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../features/friends/FriendsSlice";

export default configureStore({
  reducer: {
    friends: friendsReducer,
  },
});
