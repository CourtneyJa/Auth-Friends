import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isLogged, setIsLogged] = useState(true);
  const handleLoggedOut = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <div>
      <header>
        <h1>My Friends React App</h1>
        <nav>
          <NavLink to='/friends' activeClassName="active">
            Friends
          </NavLink><br></br>
          {isLogged ? (
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