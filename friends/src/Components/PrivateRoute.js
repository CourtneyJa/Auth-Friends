import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Login";
import FriendList from "./FriendList";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const Links = () => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/friends" component={FriendList} />
    </div>
  );
};

export default Links;
