import React from "react";

import "./styles.scss";

const CourtActivityCard = ({ onSwitch }) => {
  return (
    <section className="court-activity-card">
      <div className="court-activity-card__container container">
        <div className="row">
          <div className="col">Basic Info</div>
        </div>
        <div className="row">
          <div className="col">Activity Overview</div>
        </div>
        <div className="row">
          <div className="col">Basic Info</div>
        </div>
      </div>
    </section>
  );
};
export default CourtActivityCard;
