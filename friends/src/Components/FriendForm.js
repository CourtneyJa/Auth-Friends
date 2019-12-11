import React, { useState } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";

const FriendForm = () => {
  const [newHomie, setNewHomie] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewHomie({ ...newHomie, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoad(true);
    axiosWithAuth()
      .post("/friends", newHomie)
      .then(res => {
        console.log("posting up", res);
        setNewHomie({
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
          value={newHomie.name}
          onChange={handleChange}
        />
        <input
          placeholder="age"
          type="age"
          name="age"
          value={newHomie.age}
          onChange={handleChange}
        />
        <input
          placeholder="email@email.com"
          type="email"
          name="email"
          value={newHomie.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
