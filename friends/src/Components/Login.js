import React, { useState } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";

const Login = props => {
  const [tokens, setTokens] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setTokens({ ...tokens, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post('/login', tokens)
      .then(res => {
        localStorage.setItem('localStorage login entered', res.data.payload);
        props.history.push('/friends');
        window.location.reload(false);
      })
      .catch(err => console.log("login failed", err));
  };

  return (
    <div>
      {isLoading ? (
        "its happening..."
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input
            placeholder="enter username"
            type="text"
            name="username"
            value={tokens.username}
            onChange={handleChange}
          />
          <input
            placeholder="enter password"
            type="password"
            name="password"
            value={tokens.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
