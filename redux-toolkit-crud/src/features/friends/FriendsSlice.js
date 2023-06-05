import { createSlice } from "@reduxjs/toolkit";
import { FriendsData } from "../../app/FakeData";

/*
 * Reducers vs Actions.
 * Reducers are functions that take the current state and an action as arguments
 * and return a new state result. In other words, state + action => newState.
 *
 * Actions are payloads of information sent from the application to the
 * store. You send them to the store using dispatch(), i.e you "dispatch" an action.
 *
 * Actions are plain JavaScript objects and they must have a type property to
 * indicate the type of action being performed.
 *
 * In summary, an action is a message that describes what happened, and a reducer
 * is a function that determines how the state should change in response to that
 * action
 *
 * What is a slice?
 * a "slice" is a term that refers to a portion of the state managed by a specific reducer.
 * The name "slice" comes from the idea of "slicing" the overall state into smaller pieces,
 * each handled by its own reducer and actions.
 *
 * Store vs Reducer
 * A store is an object that holds the state of your entire application.
 * A Store takes one reducer as an argument. So how do you manage multiple reducers?
 * In Redux, you usually have multiple reducers to manage different parts of the state,
 * and you use Redux's combineReducers function to combine them into a single root reducer.
 */

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

// By default, export the reducer.
export default friendsSlice.reducer;
