import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import FriendForm from "./FriendForm";
import Friends from "./Friends";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("getting friends", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log("no homies returned", err));
  }, []);

  return (
    <div>
      <h2>Add to the Crew</h2>
      <FriendForm />
      <h3>You now have {friends.length} friends in your crew.</h3>
      <div className="peeps">
        {friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
