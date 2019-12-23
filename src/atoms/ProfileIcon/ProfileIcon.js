import React from "react";
import icon from "../../assets/profile.png";
import "./styles.scss";

const ProfileIcon = props => {
  return (
    <div className="profile-icon">
      <img className="profile-icon__icon" src={icon} alt="profile" />
    </div>
  );
};
export default ProfileIcon;
