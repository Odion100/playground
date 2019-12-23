import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import calloutsIcon from "../../assets/callouts.jpeg";
import newsfeedIcon from "../../assets/newsfeed.png";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
import MessageIcon from "../../atoms/MessageIcon/MessageIcon";

const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <div className="navbar">
                <BasketballGlobe />
                <div className="dm-icon">
                  <MessageIcon />
                </div>
              </div>
            </PhoneScreen>
          </div>
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <div className="navbar">
                <BasketballGlobe />
              </div>
              <div className="screen">
                <div>This is the screen</div>
              </div>
              <div className="bottom-panel">
                <div className="callout-icon">
                  <div className="notification-badge">23</div>
                  <img
                    className="callout-icon__icon"
                    src={calloutsIcon}
                    alt="Callouts"
                  />
                </div>
                <div className="newsfeed-icon">
                  <div className="notification-badge">23</div>
                  <img
                    className="newsfeed-icon__icon"
                    src={newsfeedIcon}
                    alt="Callouts"
                  />
                </div>
              </div>
            </PhoneScreen>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
