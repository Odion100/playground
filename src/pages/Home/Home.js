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
import blackBall from "../../assets/basketball-black.png";
import CourtActivityCard from "../../organisms/CourtActivityCard/CourtActivityCard";
const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneCover>
              <TopNav className="phone-cover--top" />
              <Screen bgImage={mapImage}>
                <CourtActivityCard />
                <MapMarker
                  markerSize={75}
                  iconImage={blackBall}
                  bgOpacity={0.5}
                  bgColor="black"
                />
                <MapMarker
                  markerSize={75}
                  iconImage={hoopIcon}
                  bgColor="#273b7a"
                  bgOpacity={1}
                  posX={30}
                  posY={30}
                />
                <MapMarker
                  markerSize={75}
                  iconImage={orangeBall}
                  bgOpacity={0.5}
                  bgColor="#ff7d00"
                  posX={60}
                  posY={20}
                />
              </Screen>
              <BottomNav className="phone-cover--bottom" />
            </PhoneCover>
          </div>
          <div className="col-6">
            <PhoneCover>
              <TopNav />
              <BottomNav className="phone-cover--top" />
              <Screen bgImage={mapImage}>
                <CourtActivityCard />
                <MapMarker
                  markerSize={75}
                  iconImage={hoopIcon}
                  bgColor="#273b7a"
                  bgOpacity={1}
                />
                <MapMarker
                  iconImage={orangeBall}
                  posX={30}
                  posY={30}
                  bgOpacity={0.5}
                  bgColor="#ff7d00"
                />
                <MapMarker
                  markerSize={75}
                  iconImage={blackBall}
                  posX={60}
                  posY={20}
                  bgOpacity={0.5}
                  bgColor="black"
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
