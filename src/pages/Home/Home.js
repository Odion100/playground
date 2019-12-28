import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import PhoneCover from "../../atoms/PhoneCover/PhoneCover";
import Screen from "../../atoms/Screen/Screen";
import MapMarker from "../../atoms/MapMarker/MapMarker";
import TopNav from "../../molecules/TopNav/TopNav";
import BottomNav from "../../molecules/BottomNav/BottomNav";
import hoopIcon from "../../assets/hoop.svg";
const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneCover>
              <TopNav />
              <Screen bgImage={mapImage}>
                <MapMarker>
                  <img src={hoopIcon} alt="hoop Icon" />
                </MapMarker>
              </Screen>
              <BottomNav />
            </PhoneCover>
          </div>
          <div className="col-6">
            <PhoneCover>
              <TopNav />
              <BottomNav />
              <Screen bgImage={mapImage}>
                <MapMarker />
              </Screen>
            </PhoneCover>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
