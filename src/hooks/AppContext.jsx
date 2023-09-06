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

  const checkValidUser = () => {
    let status = false;
    if (!profile) status = false;
    try {
      if (profile.gender === "male") status = false;
      if (profile.gender.length > 0) status = true;
      if (profile.status > 0) status = true;
      if (profile.interests && profile.interests.length > 0) status = true;
      if (profile.diseases && profile.diseases.length > 0) status = true;
      if (profile.latitude && profile.latitude.length > 0) status = true;
      if (profile.longitude && profile.longitude.length > 0) status = true;
    } catch (error) {
      status = false;
    }
    return status;
  };
  const filterUser = (data) => {
    // same gender
    const sameGenderData = data.filter(
      (user) => profile?.gender?.length && user.gender === profile.gender
    );
    // same status
    const sameStatusData = data.filter(
      (user) => profile?.status?.length > 0 && user.status === profile.status
    );

    // same interest
    const sameInterestData = [];
    if (profile.interests.length > 0) {
      data.map((user) => {
        profile.interests.map((myInterest) => {
          if (myInterest.length > 0 && user.interests.includes(myInterest)) {
            sameInterestData.push(user);
          }
        });
      });
    }
    // same disease
    const sameDiseaseData = [];
    if (profile.interests.length > 0) {
      data.map((user) => {
        profile.diseases.map((myDisease) => {
          if (myDisease.length > 0 && user.diseases.includes(myDisease)) {
            sameDiseaseData.push(user);
          }
        });
      });
    }
    // all similarities
    const allFiltersData = [
      ...sameGenderData,
      ...sameStatusData,
      ...sameInterestData,
      ...sameDiseaseData,
    ];
    // getting unique
    const uniqueUsersData = [];
    allFiltersData.map((user) => {
      let pushUser = true;
      uniqueUsersData.map((uniqueUser) => {
        if (uniqueUser._id === user._id) pushUser = false;
      });
      if (pushUser) {
        uniqueUsersData.push(user);
      }
    });
    console.log(uniqueUsersData, "uniqueUsersData");
    setUsersFeed([...uniqueUsersData]);
  };
  const fetchFeed = async () => {
    const payload = {
      ...profile.locations,
    };
    const response = await user_feed(payload);
    if (response.code === 200) {
      setUsersFeed([...response.users]);
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
