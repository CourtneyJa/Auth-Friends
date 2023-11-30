import React from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";

const Friends = ({ friend }) => {
  const handleRemove = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/friends/${friend.id}`)
      .then(res => {
        window.location.reload(false);
        console.log("axing a homie", res);
      })
      .catch(err => console.log("homie ax failed", err));
  };
  return (
    <div className="friend-card">
      <h4>{friend.name}</h4>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Friends;