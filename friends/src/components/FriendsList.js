import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import DisplayFriends from "./DisplayFriends";
import AddNewFriend from "./AddNewFriend";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const FriendsList = () => {
  const [friendsData, setFriendsData] = React.useState(null);

  React.useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        // console.log(res);
        setFriendsData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addFriend = newFriend => {
    setFriendsData(newFriend);
  };

  if (!friendsData) {
    return null;
  }

  return (
    <div>
      <Link to="./friends/create-friend" disabled>
        Create Friend
      </Link>

      {/* <Link to="/friends"> See Friends</Link> */}
      <Switch>
        <Route path="/friends/create-friend/">
          <AddNewFriend addFriend={addFriend} />
        </Route>
        <Route path="/friends">
          {friendsData.map(friend => {
            return <DisplayFriends key={friend.id} friend={friend} />;
          })}
        </Route>
      </Switch>
    </div>
  );
};
export default FriendsList;
