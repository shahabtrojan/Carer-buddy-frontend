import React, { useEffect } from "react";
import PersonFeedCard from "./components/PersonFeedCard";
import Loader from "../../components/loader/Loader";
import { Box, Typography } from "@mui/material";
import WarningButton from "../../components/warning-button/WarningButton";
import { useAppContext } from "../../hooks/AppContext";

function FeedPage() {
  const { usersFeed, fetchProfile, progress, fetchFeed } = useAppContext();

  useEffect(() => {
    fetchProfile();
    fetchFeed();
  }, []);

  if (usersFeed === null) {
    return <Loader />;
  }
  return (
    <div className=" feed__wrapper">
      {progress <= 80 && <WarningButton />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            {usersFeed.length > 0 ? (
              <>
                {usersFeed.map((user) => (
                  <PersonFeedCard user={user} />
                ))}
                <Box sx={{ width: "100%" }}>
                  <Typography className="text-center">List End</Typography>
                </Box>
              </>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center text-center"
                style={{ height: "calc(100vh - 65px)" }}
              >
                <h1>No Users Available</h1>
              </div>
            )}
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
