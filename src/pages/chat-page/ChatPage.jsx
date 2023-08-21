import React, { useState } from "react";
import ChatPersonButton from "./components/ChatPersonButton";
import PersonDetailChat from "./components/PersonDetailChat";
import SendMessageField from "./components/SendMessageField";

function ChatPage() {
  const [activeChat, setActiveChat] = useState(1);
  const [chatMessages, setChatMessages] = useState([
    "Message1.0",
    "Message1.1",
    "Message1.2",
    "Message1.3",
    "Message1.4",
    "Message1.5 this is test message and this is how we broke up with her and she still think i am guilty",
    "Message1.6",
    "Message1.7",
    "Message1.8",
    "Message1.9",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
    "Message2.0",
  ]);

  const handleChangeActiveChat = (id) => {
    setActiveChat(id);
  };
  const handleSendMessage = (message) => {
    setChatMessages([message, ...chatMessages]);
    scrollMessgaeToView();
  };

  const scrollMessgaeToView = () => {
    const newMessage = document.getElementById(0);
    setTimeout(() => {
      newMessage.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <div className="row w-100 m-0" style={{ minHeight: "88vh" }}>
      <div
        className="d-none d-md-block col-sm-4 col-md-3 m-0 p-0 border border-right-1"
        style={{ maxHeight: "88vh", overflow: "auto" }}
      >
        {[0, 1, 2, 3, 4].map((chat) => (
          <ChatPersonButton
            activeChat={chat === activeChat}
            id={chat}
            unReadMessageCount={chat === 1 ? 4 : 0}
            handleChangeActiveChat={handleChangeActiveChat}
          />
        ))}
      </div>
      <div
        className="col-12 col-md-9 m-0 p-0 position-relative pt-1"
        style={{ maxHeight: "88vh" }}
      >
        <PersonDetailChat chat={chatMessages} />
        <SendMessageField handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatPage;
