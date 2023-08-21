import React, { useRef, useState } from "react";
import EditProfileDataButton from "./EditProfileDataButton";

const defaultImg =
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

function ProfileCover() {
  const profileRef = useRef(null);
  const [profileImgPreview, setProfileImgPreview] = useState(defaultImg);
  const [profileImg, setProfileImg] = useState(null);
  const handleChangeImage = (e) => {
    if (e.target.files.length > 0) {
      setProfileImg(e.target.files[0]);
      setProfileImgPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleCancel = () => {
    setProfileImgPreview(defaultImg);
    setProfileImg(null);
  };
  return (
    <div className="col-12 cover__photo__wrapper">
      {/* <img
        className="cover__photo"
        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="cover__image"
      /> */}
      <div className="d-flex position__bottom__cover">
        <div>
          <img
            onClick={() => {
              profileRef.current.click();
            }}
            className="profile__image"
            src={profileImgPreview}
            alt="profile__image"
          />
          <input
            type="file"
            accept="image/*"
            hidden
            ref={profileRef}
            onChange={handleChangeImage}
          />
        </div>
        <div className="profile__name_wrapper">
          <h4 className="profile__name">Arslan Ashiq</h4>
          {profileImg && <EditProfileDataButton handleCancel={handleCancel} />}
        </div>
        {/* <EditProfileDataButton className="d-none d-md-block" /> */}
      </div>
    </div>
  );
}

export default ProfileCover;
