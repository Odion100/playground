import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";

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
            </PhoneScreen>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
