import React, { useRef, useState } from "react";
import EditProfileDataButton from "./EditProfileDataButton";
import { useAppContext } from "../../../hooks/AppContext";
import {
  accept_request,
  request_message,
  update_personal_info,
} from "../../../dal/user";
import { useSnackbar } from "notistack";
import { defaultImg } from "../../../utils/constant";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

function ProfileCover({ personProfile }) {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const {
    profile,
    setProfile,
    handleCheckProfileProgress,
    myRequestedUsers,
    fetchProfile,

    setShowPhone,
  } = useAppContext();
  const profileRef = useRef(null);
  const [profileImgPreview, setProfileImgPreview] = useState(
    personProfile.image || defaultImg
  );
  const [profileImg, setProfileImg] = useState(null);
  const [friendStatus, setFriendStatus] = useState("");
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
  const handleUpdateImage = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(profileImg);
    reader.onload = async () => {
      const payload = {
        ...profile,
        image: reader.result,
        profile_completed: handleCheckProfileProgress() === 100 ? true : false,
      };
      const response = await update_personal_info(payload);
      if (response.code === 200) {
        localStorage.setItem("profile", JSON.stringify(payload));
        setProfile({ ...payload });
        setProfileImg(null);
        enqueueSnackbar(response.message, { variant: "success" });
      } else {
        enqueueSnackbar("Upload small size Image", { variant: "error" });
      }
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  const handleSendRequest = async () => {
    const response = await request_message(id);
    if (response.code === 200) {
      enqueueSnackbar("Request Sent.", { variant: "success" });
      fetchProfile();
    } else {
      enqueueSnackbar(response.message, { variant: "error" });
    }
  };
  const handleAcceptRequest = async () => {
    const response = await accept_request({
      id,
      payload: { status: "accepted" },
    });
    if (response.code == 200) {
      enqueueSnackbar("Request Accepted", { variant: "success" });
      fetchProfile();
    }
  };
  const checkIncomingRequests = () => {
    let status = 0;
    if (profile && profile.message_request.length > 0) {
      profile.message_request.map((request) => {
        if (id == request.requested_by._id) {
          status = 1;
          if (request.requested_status == "accepted") {
            status = 2;
            setShowPhone(true);
          }
        }
      });
    }
    return status;
  };
  const checkSendRequests = () => {
    let status = 0;
    if (myRequestedUsers && myRequestedUsers.length > 0) {
      myRequestedUsers.map((request) => {
        if (id == request._id) {
          status = 1;
          request.message_request.map((checkStatus) => {
            if (
              checkStatus.requested_status === "accepted" &&
              checkStatus.requested_by == profile._id
            ) {
              status = 2;
              setShowPhone(true);
            }
          });
        }
      });
    }
    return status;
  };
  const getButton = () => {
    let status = checkIncomingRequests();
    if (status == 1) {
      return (
        <Button
          variant="outlined"
          sx={{ color: "black", fontSize: 8 }}
          onClick={handleAcceptRequest}
        >
          Accept Request
        </Button>
      );
    }
    if (status == 2) return;
    status = checkSendRequests();
    if (status == 1) {
      return (
        <Button variant="outlined" sx={{ color: "black", fontSize: 8 }}>
          Request Sent
        </Button>
      );
    }
    if (status == 2) return;
    return (
      <Button
        variant="outlined"
        sx={{ color: "black", fontSize: 8 }}
        onClick={handleSendRequest}
      >
        Send Request
      </Button>
    );
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
              if (id) {
                return;
              }
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
          <h4 className="profile__name">{`${personProfile.first_name} ${personProfile.last_name}`}</h4>
          {id && <>{friendStatus ? friendStatus : getButton()}</>}
          {profileImg && (
            <EditProfileDataButton
              handleCancel={handleCancel}
              handleUpdate={handleUpdateImage}
            />
          )}
        </div>
        {/* <EditProfileDataButton className="d-none d-md-block" /> */}
      </div>
    </div>
  );
}

export default ProfileCover;
