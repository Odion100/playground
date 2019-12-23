import React from "react";
import newsfeedIcon from "../../assets/newsfeed.png";
import "./styles.scss";

const NewsfeedIcon = ({ count }) => {
  return (
    <div className="newsfeed-icon">
      <img className="newsfeed-icon__icon" src={newsfeedIcon} alt="newsfeed" />
    </div>
  );
};
export default NewsfeedIcon;
