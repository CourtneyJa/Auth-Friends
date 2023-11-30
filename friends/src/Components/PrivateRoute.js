import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Login";
import FriendList from "./FriendList";
import FriendForm from "./FriendForm";
import Friends from "./Friends";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const Links = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/protect" component={FriendForm} />
      <PrivateRoute exact path="/protected" component={Friends} />
      <PrivateRoute path="/friends" component={FriendList} />
    </div>
  );
};

export default Links;
