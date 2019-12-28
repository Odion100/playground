import React from "react";
import "./styles.scss";

const Screen = ({ children, bgImage }) => {
  return (
    <div className="screen" style={{ "--bg-image": `url(${bgImage})` }}>
      {children}
    </div>
  );
};
export default Screen;
