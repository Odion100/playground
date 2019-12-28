import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import PhoneCover from "../../atoms/PhoneCover/PhoneCover";
import Screen from "../../atoms/Screen/Screen";
import MapMarker from "../../atoms/MapMarker/MapMarker";
import TopNav from "../../molecules/TopNav/TopNav";
import BottomNav from "../../molecules/BottomNav/BottomNav";
import hoopIcon from "../../assets/hoop.svg";
import orangeBall from "../../assets/orange basketball.png";

const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneCover>
              <TopNav />
              <Screen bgImage={mapImage}>
                <MapMarker
                  iconImage={hoopIcon}
                  bgColor="#273b7a"
                  bgOpacity={0.9}
                />
                <MapMarker
                  iconImage={orangeBall}
                  posX={30}
                  posY={30}
                  bgOpacity={0.2}
                  bgColor="#ff7d00"
                />
              </Screen>
              <BottomNav />
            </PhoneCover>
          </div>
          <div className="col-6">
            <PhoneCover>
              <TopNav />
              <BottomNav />
              <Screen bgImage={mapImage}>
                <MapMarker
                  iconImage={hoopIcon}
                  bgColor="#273b7a"
                  bgOpacity={1}
                />
                <MapMarker
                  iconImage={orangeBall}
                  posX={30}
                  posY={30}
                  bgOpacity={0.2}
                  bgColor="#ff7d00"
                />
              </Screen>
            </PhoneCover>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
