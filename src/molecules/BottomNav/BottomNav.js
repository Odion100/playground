import React from "react";
import CalloutIcon from "../../atoms/CalloutIcon/CalloutIcon";
import NewsfeedIcon from "../../atoms/NewsfeedIcon/NewsfeedIcon";
import ProfileIcon from "../../atoms/ProfileIcon/ProfileIcon";
import "./styles.scss";

const BottomNav = props => {
  return (
    <div className="bottom-panel">
      <CalloutIcon />
      <NewsfeedIcon />
      <ProfileIcon />
    </div>
  );
};
export default BottomNav;
