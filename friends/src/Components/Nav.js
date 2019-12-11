import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [logged, setLogged] = useState(true);
  const handleLoggedOut = () => {
    localStorage.removeItem("token");
    setLogged(false);
  };

  return (
    <div>
      <header>
        <h1>My Friends React App</h1>
        <nav>
          <NavLink to="/friends" activeClassName="active">
            Friends
          </NavLink>
          {logged ? (
            <NavLink
              exact
              to="/"
              onClick={handleLoggedOut}
              activeClassName="active"
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink exact to="/" activeClassName="active">
              Sign In
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Nav