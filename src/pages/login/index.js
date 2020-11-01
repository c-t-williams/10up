import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../lib/auth";

import "./login.css";

const Login = (props) => {
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(
      e.target.elements.username.value,
      e.target.elements.password.value
    );

    if (response) {
      history.push("/");
    } else {
      setError("An error has occurred. Please try again");
    }
  };

  return (
    <React.Fragment>
      <h1>Login</h1>

      <div className="login">
        <form method="post" onSubmit={handleSubmit}>
          <div>{error}</div>

          <div>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
