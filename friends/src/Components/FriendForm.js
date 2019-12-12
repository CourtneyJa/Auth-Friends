import React, { useState } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";

const FriendForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', newFriend)
      .then(res => {
        console.log("posting up", res);
        setNewFriend({
          name: "",
          age: "",
          email: ""
        });
        window.location.reload(false);
      })
      .catch(err => console.log("post failed", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          placeholder="age"
          type="num"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          placeholder="email@email.com"
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
