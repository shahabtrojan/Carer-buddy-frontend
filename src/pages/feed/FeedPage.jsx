import React from "react";
import PersonFeedCard from "./components/PersonFeedCard";

function FeedPage() {
  return (
    <div className=" feed__wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <PersonFeedCard />
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
