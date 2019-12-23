import React from "react";
import "./styles.scss";

const NotificationBadge = ({ count }) => {
  return <div className="notification-badge">{count}</div>;
};
export default NotificationBadge;
