import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AddNewFriend = props => {
  const [newUserText, setNewUserText] = React.useState({
    name: "",
    age: "",
    email: ""
  });

  //   React.useEffect(() => {
  //     handleSubmit();
  //   }, []);

  const handleChange = e => {
    setNewUserText({
      ...newUserText,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newUserText)
      .then(res => {
        //console.log(res);
        props.addFriend(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
      // onSubmit={handleSubmit}
      >
        <label />
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          type="text"
          value={newUserText.name}
        />
        <label />
        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          type="text"
          value={newUserText.age}
        />
        <label />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          type="email"
          value={newUserText.email}
        />
        <button onClick={handleSubmit}>
          <Link to="/friends">Add new friend</Link>
        </button>
      </form>
    </div>
  );
};

export default AddNewFriend;
