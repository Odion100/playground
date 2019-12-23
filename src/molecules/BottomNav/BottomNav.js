import React from "react";
import CalloutIcon from "../../atoms/CalloutIcon/CalloutIcon";
import NewsfeedIcon from "../../atoms/NewsfeedIcon/NewsfeedIcon";
import ProfileIcon from "../../atoms/ProfileIcon/ProfileIcon";
import EventsIcon from "../../atoms/EventsIcon/EventsIcon";
import ToolsIcon from "../../atoms/ToolsIcon/ToolsIcon";

import "./styles.scss";

const BottomNav = props => {
  return (
    <div className="bottom-panel phone-cover">
      <CalloutIcon />
      <NewsfeedIcon />
      <ProfileIcon />
      <EventsIcon />
      <ToolsIcon />
    </div>
  );
};
export default BottomNav;
