import React from "react";
import ChatList from "./ChatList";
import "./styles/ChatMenu.css";
import ChatWindow from "./ChatWindow";

function ChatMenu() {
  return (
    <div className="chatmenu">
      <ChatList />
      <ChatWindow />
    </div>
  );
}

export default ChatMenu;
