import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import BasketballGlobe from "../../atoms/BasketballGlobe/BasketballGlobe";
import PhoneScreen from "../../atoms/PhoneScreen/PhoneScreen";
const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="home__phone1 phone">
              <div className="navbar">
                <BasketballGlobe />
              </div>
              <img className="home__mobile-map" src={mapImage} alt="Map" />
            </div>
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
