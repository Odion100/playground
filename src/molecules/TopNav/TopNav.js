import React from "react";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import MessageIcon from "../../atoms/MessageIcon/MessageIcon";
import "./styles.scss";
import bu from "../../assets/bu.png";
const TopNav = props => {
  return (
    <div className="top-nav phone-cover">
      <BasketballGlobe />
      <div className="top_nav__logo-container">
        <img className="logo" src={bu} alt="BU" />
      </div>

      <MessageIcon />
    </div>
  );
};
export default TopNav;
