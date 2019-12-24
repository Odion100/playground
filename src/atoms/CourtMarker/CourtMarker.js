import React from "react";

import icon from "../../assets/court marker.png";
import "./styles.scss";

const CourtMarker = ({ count }) => {
  return (
    <div className="marker">
      <img className="marker__icon" src={icon} alt="Callouts" />
    </div>
  );
};
export default CourtMarker;
