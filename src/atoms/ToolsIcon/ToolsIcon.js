import React from "react";
import icon from "../../assets/tools.png";
import "./styles.scss";

const ToolsIcon = ({ count }) => {
  return (
    <div className="tools-icon">
      <img className="tools-icon__icon" src={icon} alt="newsfeed" />
    </div>
  );
};
export default ToolsIcon;
