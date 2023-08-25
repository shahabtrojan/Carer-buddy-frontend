import React, { useEffect, useState } from "react";
import ProfileCover from "./components/ProfileCover";
import TabsOption from "../../components/tabs-option/TabsOption";
import "../../styles/profile-page.css";
import { useParams } from "react-router-dom";
import { get_profile_by_id } from "../../dal/user";
import { useAppContext } from "../../hooks/AppContext";
import Loader from "../../components/loader/Loader";

function ProfilePage() {
  const { id } = useParams();
  const { profile, fetchProfile } = useAppContext();
  const [personProfile, setPersonProfile] = useState(null);
  const getProfile = async () => {
    const response = await get_profile_by_id(id);
    if (response.code == 200) {
      setPersonProfile({ ...response.user });
    }
  };
  useEffect(() => {
    if (id) {
      getProfile();
    }
    fetchProfile();
    return () => {
      setPersonProfile(null);
    };
  }, [id]);
  if (id && !personProfile) {
    return <Loader />;
  }
  return (
    <div className="container">
      {/* <div className="container"> */}
      <div className="w-100 justify-content-center">
        <ProfileCover personProfile={id ? personProfile : profile} />
      </div>

      <TabsOption personProfile={id ? personProfile : profile} />
      {/* </div> */}
    </div>
  );
}

export default ProfilePage;
