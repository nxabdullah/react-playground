import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../features/friends/FriendsSlice";

/*
 * What is a store?
 * In Redux, a "store" is an object that holds the state of your entire application.
 * The Store is the single source of truth for the state in your application
 *
 * Here are the primary responsiblities of a store:
 *
 * Holds application state:
 *  The store maintains the state of the application in a single JavaScript object.
 *
 * Allows access to state:
 * The store.getState() method allows components or other parts of your app
 * to access the current state.
 *
 * Allows state to be updated:
 *  The store.dispatch(action) method allows the state to be updated. Actions are plain
 *  JavaScript objects that represent a change that should occur in the state.
 *  They are the only way to update the state. Hence why, redux makes our state predictable.
 */

export default configureStore({
  reducer: {
    friends: friendsReducer,
  },
});
