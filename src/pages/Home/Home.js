import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import calloutsIcon from "../../assets/callouts.jpeg";
import newsfeedIcon from "../../assets/newsfeed.png";
import profileIcon from "../../assets/profile.jpg";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
import MessageIcon from "../../atoms/MessageIcon/MessageIcon";
import NotificationBadge from "../../atoms/NotificationBadge/NotificationBadge";
import Screen from "../../atoms/Screen/Screen";
const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <div className="navbar">
                <BasketballGlobe />

                <MessageIcon />
              </div>
              <Screen />
              <div className="bottom-panel">
                <div className="callout-icon">
                  <NotificationBadge count="20" />
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
                    alt="newsfeed"
                  />
                </div>
                <div className="profile-icon">
                  <div className="notification-badge">23</div>
                  <img
                    className="profile-icon__icon"
                    src={profileIcon}
                    alt="profile"
                  />
                </div>
              </div>
            </PhoneScreen>
          </div>
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <div className="navbar">
                <BasketballGlobe />
                <div className="dm-icon">
                  <MessageIcon />
                </div>
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
                    alt="newsfeed"
                  />
                </div>
                <div className="profile-icon">
                  <div className="notification-badge">23</div>
                  <img
                    className="profile-icon__icon"
                    src={profileIcon}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="screen"></div>
            </PhoneScreen>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
