import React, { useEffect, useState } from "react";
import { get_profile, get_requests, user_feed } from "../dal/user";

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
  const [showPhone, setShowPhone] = useState(false);

  const [usersFeed, setUsersFeed] = useState(null);
  const [progress, setProgress] = React.useState(0);
  const [myRequestedUsers, setMyRequestedUsers] = useState([]);

  const [notifications, setNotifications] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    handleCheckProfileProgress();
  }, [profile]);
  useEffect(() => {
    handleGetNotifications();
  }, [profile]);

  const fetchFeed = async () => {
    const response = await user_feed();
    if (response.code === 200) {
      if (response.cluster_users) {
        let usersList = [];
        response.cluster_users.map((user) => {
          if (user._id !== profile._id) {
            usersList.push(user);
          }
        });
        setUsersFeed([...usersList]);
      } else {
        setUsersFeed([...response.users]);
      }
    }
  };
  const fetchProfile = async () => {
    const response = await get_profile();
    if (response.code === 200) {
      setMyRequestedUsers([...response.my_requested_users]);
      setProfile({ ...response.user });
      fetchFeed();
    }
  };
  const handleGetNotifications = async () => {
    const response = await get_requests();
    if (response.code === 200) {
      setNotifications([...response.requests]);
    }
  };
  const handleCheckArray = (value, key) => {
    if (profile && profile[key] && profile[key].length > 0) {
      let addedValues = 0;
      profile[key].map((data) => {
        if (data.length > 0) {
          addedValues += 1;
        }
      });
      value += addedValues * 10;
    }
    return value;
  };
  const handleCheckProfileProgress = () => {
    let value = 0;
    if (profile.first_name) {
      value += 8;
    }
    if (profile.last_name) {
      value += 8;
    }
    if (profile.gender) {
      value += 8;
    }
    value = handleCheckArray(value, "interests");
    value = handleCheckArray(value, "diseases");
    if (profile.locations) {
      if (profile.locations.longitude) value += 8;
      if (profile.locations.latitude) value += 8;
    }
    setProgress(value);
    return value;
  };
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
    myRequestedUsers,
    setMyRequestedUsers,
    usersFeed,
    setUsersFeed,
    showPhone,
    setShowPhone,

    fetchProfile,
    fetchFeed,
    handleCheckProfileProgress,
    handleGetNotifications,
  };
  return (
    <AppContext.Provider value={collection}>{children}</AppContext.Provider>
  );
};
