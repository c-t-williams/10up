import React, { useState, createContext } from "react";
import axios from "axios";

import { getItem, setItem, removeItem } from "../localstorage";
import { apiurl } from "../../constants";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  let initialState = getItem("user");
  if (initialState) initialState = JSON.parse(atob(initialState));

  const [user, setUser] = useState(initialState ? initialState : {});

  const authorizationHeader = () => {
    if (user.token) {
      return { Authorization: `Bearer ${user.token}` };
    }

    return {};
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${apiurl}/wp-json/jwt-auth/v1/token`, {
        username: username,
        password: password,
      });

      if (response.data) {
        const userItem = {
          user_display_name: response.data.user_display_name,
          user_email: response.data.user_email,
          user_nicename: response.data.user_email,
          token: response.data.token,
        };

        setUser(userItem);
        setItem("user", btoa(JSON.stringify(userItem)));

        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  const logout = () => {
    setUser({});
    removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, authorizationHeader, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
