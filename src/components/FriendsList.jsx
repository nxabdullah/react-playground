import React from "react";
import { useSelector } from "react-redux";
import FriendCard from "./FriendCard";

function FriendsList() {
  const friends = useSelector((state) => state.friends.value);
  return (
    <div className="displayUsers my-4">
      <h1 className="text-2xl font-bold mb-2">Your Friends</h1>
      {friends.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </div>
  );
}

export default FriendsList;
