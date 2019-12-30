import React from "react";
import NavIcon from "../../atoms/NavIcon/NavIcon";
import calloutIcon from "../../assets/callout.png";
import newsfeedIcon from "../../assets/newsfeed.png";
import profileIcon from "../../assets/profile.png";
import eventsIcon from "../../assets/event.png";
import toolsIcon from "../../assets/tools.png";

import "./styles.scss";

const BottomNav = ({ onSwitch, className }) => {
  const switchSelection = () => {};

  return (
    <div className={`bottom-nav phone-cover ${className}`}>
      <NavIcon
        iconImage={calloutIcon}
        iconClass="bottom-nav__callout-icon"
        isSelected={true}
        notifications={26}
      />
      <NavIcon
        iconImage={newsfeedIcon}
        iconClass="bottom-nav__newsfeed-icon"
        isSelected={false}
      />
      <NavIcon
        iconImage={profileIcon}
        iconClass="bottom-nav__profile-icon"
        isSelected={false}
      />
      <NavIcon
        iconImage={eventsIcon}
        iconClass="bottom-nav__events-icon"
        isSelected={false}
        notifications={6}
      />
      <NavIcon
        iconImage={toolsIcon}
        iconClass="bottom-nav__tools-icon"
        isSelected={false}
      />
    </div>
  );
};
export default BottomNav;
