import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../features/friends/FriendsSlice";

function AddFriend() {
  // you use dispatch to "dispatch" actions to the store.
  const dispatch = useDispatch();

  // useSelector is a hook that allows you to extract data from the Redux store state,
  // using a selector function.
  // in simpler terms, you use this whenever you want to read the current value of one of the
  // states that you created in your store.
  const friends = useSelector((state) => state.friends.value);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <h3 className="text-xl mb-2 font-bold">Add a friend</h3>
      <div className="mb-4">
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() =>
          dispatch(
            addFriend({
              id: friends.length > 0 ? friends[friends.length - 1].id + 1 : 1,
              name,
              phoneNumber,
            })
          )
        }
      >
        Add Friend
      </button>
    </div>
  );
}

export default AddFriend;
