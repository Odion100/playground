import React from "react";
import NotificationBadge from "../../atoms/NotificationBadge/NotificationBadge";
import icon from "../../assets/callout.png";
import "./styles.scss";

const CalloutIcon = ({ count }) => {
  return (
    <div className="callout-icon">
      <NotificationBadge count="20" />
      <img className="callout-icon__icon" src={icon} alt="Callouts" />
    </div>
  );
};
export default CalloutIcon;
