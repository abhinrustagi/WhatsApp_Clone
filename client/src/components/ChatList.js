import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";
import "./styles/ChatList.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../utils/axios";
import { disconnectSocket } from "../utils/emitters/socketIO";

function ChatList() {
  const history = useHistory();
  const [{ user, message }, dispatch] = useStateValue();
  const logOut = () => {
    dispatch({ type: "SET_USER", user: null });
    disconnectSocket();
    history.push("/");
  };

  return user ? (
    <div className="chatlist">
      <div className="user_header">
        <img src={user.avatar} alt="..." />
        <button onClick={logOut}>Log Out</button>
      </div>
      <div className="search_bar">
        <span className="search_icon">
          <SearchIcon />
        </span>
        <input type="text" placeholder="Search Users or Chats here" />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default ChatList;
