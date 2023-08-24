import React, { useEffect, useState } from "react";
import PersonFeedCard from "./components/PersonFeedCard";
import { user_feed } from "../../dal/user";
import Loader from "../../components/loader/Loader";
import { IconButton, Stack, Tooltip } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

function FeedPage() {
  const navigate = useNavigate();
  const [usersFeed, setUsersFeed] = useState(null);
  const [showWarningLogo, setShowWarningLogo] = useState(false);
  const fetchFeed = async () => {
    const response = await user_feed();
    if (response.code === 200) {
      setUsersFeed([...response.users]);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  if (usersFeed === null) {
    return <Loader />;
  }
  return (
    <div className=" feed__wrapper">
      <Stack
        direction="row"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 40,
          color: "black",
          backgroundColor: "silver",
          borderWidth: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          transition: "all 0.3s",
          borderRadius: showWarningLogo ? "100%" : 0,
        }}
        onMouseEnter={() => {
          setShowWarningLogo(true);
        }}
        onMouseLeave={() => {
          setShowWarningLogo(false);
        }}
      >
        <Tooltip title="Complete Your Profile" arrow placement="top">
          <IconButton onClick={() => navigate("/profile")}>
            <ErrorIcon color="error" sx={{ height: 30, width: 30 }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            {usersFeed.map((user) => (
              <PersonFeedCard user={user} />
            ))}
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
