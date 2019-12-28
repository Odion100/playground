import React, { Children } from "react";
import "./styles.scss";
const PhoneScreen = ({ bgImage, children }) => {
  return <div className="phone">{children}</div>;
};
export default PhoneScreen;
