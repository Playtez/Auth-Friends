import React from "react";

import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [userText, setUserText] = React.useState({
    username: "",
    password: ""
  });
  const [fetchingState, setFetchingState] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setFetchingState(!fetchingState);
    axiosWithAuth()
      .post("/login", userText)
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handlechange = e => {
    setUserText({
      ...userText,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="App-Login">
        <label />
        <input
          type="text"
          name="username"
          value={userText.username}
          onChange={handlechange}
          placeholder="Username"
        />
        <label />
        <input
          type="password"
          name="password"
          onChange={handlechange}
          value={userText.password}
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
