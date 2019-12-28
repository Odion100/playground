import React from "react";
import NotificationBadge from "../../atoms/NotificationBadge/NotificationBadge";
import "./styles.scss";

const NewsfeedIcon = ({
  iconClass,
  iconImage,
  isSelected,
  clickHandler,
  notifications
}) => {
  return (
    <div
      className={`nav-icon nav-icon__${
        isSelected ? "selected" : ""
      } ${iconClass}`}
    >
      <NotificationBadge count={notifications} />
      <img src={iconImage} alt="newsfeed" onClick={clickHandler} />
    </div>
  );
};
export default NewsfeedIcon;
