import React from "react";
import "./styles.scss";

const NotificationBadge = ({ count }) => {
  return (
    <div
      className={`notification-badge notification-badge__${
        count > 0 ? "visible" : "hidden"
      }`}
    >
      {count}
    </div>
  );
};
export default NotificationBadge;
