import React from "react";
import "./styles.scss";
import mapImage from "../../assets/map.png";
import globeImage from "../../assets/globe.png";
const Home = props => {
  return (
    <section className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="home__phone1 phone">
              <div className="navbar">
                <img className="home__map" src={globeImage} alt="globe" />
              </div>
              <img className="home__mobile-map" src={mapImage} alt="Map" />
            </div>
          </div>
          <div className="col-6">
            <div className="home__phone2 phone">
              <img className="home__mobile-map" src={mapImage} alt="Map" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
