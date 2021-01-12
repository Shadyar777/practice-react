import React from "react";
import profileClass from "./Profile.module.css";
import Profileinfo from "./profileinfo/profileinfo";

const Profile = () => {
  return (
    <div className={profileClass.content}>
      <Profileinfo />
    </div>
  );
};

export default Profile;
