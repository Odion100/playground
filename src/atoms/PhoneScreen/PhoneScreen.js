import React, { Children } from "react";
import "./styles.scss";
const PhoneScreen = ({ bgImage, children }) => {
  return (
    <div className="phone" style={{ "--bg-image": `url(${bgImage})` }}>
      {children}
    </div>
  );
};
export default PhoneScreen;
