import React from "react";
import Leftsidebar from "../../components/leftsidebar/leftsidebar";
import Chatbox from "../../components/chatbox/Chatbox";
import Rightsidebar from "../../components/rightsidebar/Rightsidebar";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <Leftsidebar></Leftsidebar>
        <Chatbox></Chatbox>
        <Rightsidebar></Rightsidebar>
      </div>
    </div>
  );
};

export default Chat;
