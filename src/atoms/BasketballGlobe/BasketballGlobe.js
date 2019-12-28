import React from "react";
import ball from "../../assets/bball.png";
import GlobeSilhouette from "../../atoms/GlobeSilhouette/GlobeSilhouette";

import "./styles.scss";

const BasketballGlobe = props => {
  return (
    <div className="basketball-globe">
      <GlobeSilhouette />
      <img className="basketball-globe__ball" src={ball} alt="BBall" />
    </div>
  );
};
export default BasketballGlobe;
