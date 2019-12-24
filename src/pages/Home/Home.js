import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
import Screen from "../../atoms/Screen/Screen";
import TopNav from "../../molecules/TopNav/TopNav";
import BottomNav from "../../molecules/BottomNav/BottomNav";
import CourtMarker from "../../atoms/CourtMarker/CourtMarker";

const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <TopNav />
              <Screen></Screen>
              <BottomNav />
            </PhoneScreen>
          </div>
          <div className="col-6">
            <PhoneScreen bgImage={mapImage}>
              <TopNav />
              <BottomNav />
              <Screen></Screen>
            </PhoneScreen>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
