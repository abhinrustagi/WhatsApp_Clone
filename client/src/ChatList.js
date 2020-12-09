import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./ChatList.css";

function ChatList() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const logOut = () => {
    dispatch({ type: "SET_USER", user: null });
    history.push("/");
  };
  return user ? (
    <div className="chatlist">
      <div className="user_header">
        <img src={user.avatar} alt="..." />
        <button onClick={logOut}>LOG OUT</button>
      </div>
      <div className="search_bar">
        <input type="text" placeholder="Search Users or Chats here" />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default ChatList;
