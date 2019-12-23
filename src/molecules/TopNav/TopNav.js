import React from "react";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import MessageIcon from "../../atoms/MessageIcon/MessageIcon";
import "./styles.scss";

const TopNav = props => {
  return (
    <div className="top-nav phone-cover">
      <BasketballGlobe />

      <MessageIcon />
    </div>
  );
};
export default TopNav;
