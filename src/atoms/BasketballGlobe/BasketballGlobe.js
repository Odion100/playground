import React from "react";
import ball from "../../assets/bball.png";
import globe from "../../assets/globe.png";
import "./styles.scss";

const BasketballGlobe = props => {
  return (
    <div className="basketball-globe">
      <img className="basketball-globe__globe" src={globe} alt="Map" />
      <img className="basketball-globe__ball" src={ball} alt="BBall" />
    </div>
  );
};
export default BasketballGlobe;
