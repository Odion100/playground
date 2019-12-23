import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import calloutsIcon from "../../assets/callouts.jpeg";
import newsfeedIcon from "../../assets/newsfeed.png";
import profileIcon from "../../assets/profile.jpg";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
import MessageIcon from "../../atoms/MessageIcon/MessageIcon";
import CalloutIcon from "../../atoms/CalloutIcon/CalloutIcon";
import Screen from "../../atoms/Screen/Screen";
import NewsfeedIcon from "../../atoms/NewsfeedIcon/NewsfeedIcon";
import ProfileIcon from "../../atoms/ProfileIcon/ProfileIcon";
import TopNav from "../../molecules/TopNav/TopNav";
import BottomNav from "../../molecules/BottomNav/BottomNav";

const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <TopNav />
              <Screen />
              <BottomNav />
            </PhoneScreen>
          </div>
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <TopNav />
              <BottomNav />
              <Screen />
            </PhoneScreen>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
