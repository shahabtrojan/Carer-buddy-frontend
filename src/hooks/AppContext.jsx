import React, { useEffect, useState } from "react";
import { get_profile, user_feed } from "../dal/user";

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

  function calculateDistance(lat1, lon1, lat2, lon2) {
    if (lat1 && lat1 && lat2 && lat2) {
    } else {
      return false;
    }
    // Convert latitude and longitude from degrees to radians
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    // Radius of the Earth in kilometers
    const earthRadius = 6371; // You can also use 3958.8 miles for miles

    // Haversine formula
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;
    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const fetchFeed = async () => {
    const payload = {
      ...profile.locations,
    };
    const response = await user_feed(payload);
    const usersList = [];
    if (response.code === 200) {
      response.users.map((user) => {
        let distance = calculateDistance(
          profile.locations.latitude,
          profile.locations.longitude,
          user.locations.latitude,
          user.locations.longitude
        );
        if (distance === false) {
          distance = "";
        } else {
          distance = `~${(distance + 1).toFixed(0)}KM`;
        }
        const newUser = { ...user, distance };
        usersList.push(newUser);
      });
      setUsersFeed([...usersList]);
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
    // const response = await get_requests();
    // if (response.code === 200) {
    setNotifications([]);
    // }
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
