import React from "react";
import NavIcon from "../../atoms/NavIcon/NavIcon";
import calloutIcon from "../../assets/callout.png";
import newsfeedIcon from "../../assets/newsfeed.png";
import profileIcon from "../../assets/profile.png";
import eventsIcon from "../../assets/event.png";
import toolsIcon from "../../assets/tools.png";

import "./styles.scss";

const BottomNav = props => {
  return (
    <div className="bottom-nav phone-cover">
      <NavIcon iconImage={calloutIcon} iconClass="bottom-nav__callout-icon" />
      <NavIcon iconImage={newsfeedIcon} iconClass="bottom-nav__newsfeed-icon" />
      <NavIcon iconImage={profileIcon} iconClass="bottom-nav__profile-icon" />
      <NavIcon iconImage={eventsIcon} iconClass="bottom-nav__events-icon" />
      <NavIcon iconImage={toolsIcon} iconClass="bottom-nav__tools-icon" />
    </div>
  );
};
export default BottomNav;
