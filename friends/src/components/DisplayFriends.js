import React from "react";

const DisplayFriends = ({ friend }) => {
  return (
    <div key={friend.id}>
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};
export default DisplayFriends;
