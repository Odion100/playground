import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import PhoneCover from "../../atoms/PhoneCover/PhoneCover";
import Screen from "../../atoms/Screen/Screen";
import TopNav from "../../molecules/TopNav/TopNav";
import BottomNav from "../../molecules/BottomNav/BottomNav";

const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <PhoneCover bgImage={mapImage}>
              <TopNav />
              <Screen></Screen>
              <BottomNav />
            </PhoneCover>
          </div>
          <div className="col-6">
            <PhoneCover bgImage={mapImage}>
              <TopNav />
              <BottomNav />
              <Screen></Screen>
            </PhoneCover>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
