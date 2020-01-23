import React from "react";
import fullcourtIcon from "../../assets/fullcourt.png";
import hoopIcon from "../../assets/hoop.svg";
import netIcon from "../../assets/hoop2.png";
import "./styles.scss";

const CourtActivityCard = ({ onSwitch }) => {
  return (
    <section className="court-activity-card">
      <div className="court-activity-card__container container">
        <div className="row">
          <div className="col court-activity-card__drag-handle">
            <div className="court-activity-card__drag-handle__handle"></div>
          </div>
        </div>
        <div className="row court-activity-card__general-info">
          <div className="col-6">
            <div className="court-activity-card__general-info__title">
              <h5>Dean Street Park</h5>

              <a href="#">465 Dean Street</a>
            </div>
          </div>
          <div
            className="col-6"
            className="court-activity-card__general-info__icons"
          >
            <img src={netIcon} alt="Watch Activity" />
            <img src={fullcourtIcon} alt="Watch Activity" />
          </div>
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
