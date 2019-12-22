import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import dmIcon from "../../assets/message.png";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
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
                  <img src={dmIcon} alt="chat" />
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
