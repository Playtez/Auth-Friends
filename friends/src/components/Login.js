import React from "react";

import "../App.css";

const Login = () => {
  const [userText, setUserText] = React.useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handlechange = e => {
    setUserText({
      ...userText,
      [e.target.name]: [e.target.value]
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="App-Login">
        <label />
        <input
          name="username"
          value={userText.username}
          onChange={handlechange}
          placeholder="Username"
        />
        <label />
        <input
          name="password"
          onChange={handlechange}
          value={userText.password}
          placeholder="Password"
        />
        <button> Login</button>
      </form>
    </div>
  );
};

export default Login;
