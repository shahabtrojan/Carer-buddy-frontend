import React, { useState } from "react";

export const useAppContext = () => {
  return React.useContext(AppContext);
};
const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [profile, setProfile] = useState(
    localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : {}
  );
  const [progress, setProgress] = React.useState(0);
  const [notifications, setNotifications] = useState(null);
  const [messages, setMessages] = useState(null);
  const collection = {
    notifications,
    setNotifications,
    messages,
    setMessages,
    isAuthenticated,
    setIsAuthenticated,
    profile,
    setProfile,
    progress,
    setProgress,
  };
  return (
    <AppContext.Provider value={collection}>{children}</AppContext.Provider>
  );
};
