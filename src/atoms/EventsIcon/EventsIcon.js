import React from "react";
import icon from "../../assets/event.png";
import "./styles.scss";

const EventsIcon = ({ count }) => {
  return (
    <div className="events-icon">
      <img className="events-icon__icon" src={icon} alt="newsfeed" />
    </div>
  );
};
export default EventsIcon;
