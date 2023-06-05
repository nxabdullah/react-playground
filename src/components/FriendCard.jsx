import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updatePhoneNumber,
  deleteFriend,
} from "../features/friends/FriendsSlice";

function FriendCard({ friend }) {
  const dispatch = useDispatch();
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4"
      key={friend.id}
    >
      <h1 className="text-xl">{friend.name}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        {friend.phoneNumber}
      </p>
      <input
        type="text"
        placeholder="Update Phone Number"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
        onChange={(event) => setNewPhoneNumber(event.target.value)}
      />
      <button
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() =>
          dispatch(
            updatePhoneNumber({
              id: friend.id,
              phoneNumber: newPhoneNumber,
            })
          )
        }
      >
        Update
      </button>
      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => dispatch(deleteFriend({ id: friend.id }))}
      >
        Delete
      </button>
    </div>
  );
}

export default FriendCard;
