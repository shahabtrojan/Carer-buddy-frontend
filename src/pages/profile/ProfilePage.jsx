import React from "react";
import ProfileCover from "./components/ProfileCover";
import TabsOption from "../../components/tabs-option/TabsOption";
import "../../styles/profile-page.css";

function ProfilePage() {
  return (
    <div className="container">
      {/* <div className="container"> */}
        <div className="w-100 justify-content-center">
          <ProfileCover />
        </div>

        <TabsOption />
      {/* </div> */}
    </div>
  );
}

export default ProfilePage;
