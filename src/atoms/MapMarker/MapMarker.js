import React from "react";
import "./styles.scss";
const MapMarker = ({
  iconImage,
  bgColor,
  bgOpacity,
  markerSize,
  posY,
  posX
}) => {
  return (
    <div
      className="map-marker"
      style={{
        "--marker-size": `${markerSize ? markerSize + "px" : "75px"}`,
        position: "absolute",
        top: `${posY ? posY + "%" : "50%"}`,
        left: `${posX ? posX + "%" : "50%"}`
      }}
    >
      <div className="map-marker__container">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill={bgColor || "white"}
            fillOpacity={bgOpacity || "0.6"}
            stroke="#212529"
            strokeWidth="0"
          >
            <path
              d="M2270 5104 c-839 -128 -1492 -786 -1615 -1627 -20 -139 -20 -409 -1
-549 37 -258 124 -504 258 -726 61 -102 1633 -2202 1648 -2202 15 0 1587 2100
1648 2202 133 221 218 459 256 719 21 140 21 418 1 558 -124 844 -782 1502
-1626 1626 -135 19 -437 19 -569 -1z m592 -667 c246 -65 429 -170 601 -344
170 -173 270 -349 334 -591 35 -131 44 -382 19 -516 -51 -267 -167 -491 -353
-679 -172 -174 -352 -277 -601 -345 -90 -24 -112 -26 -302 -26 -190 0 -212 2
-302 26 -246 67 -419 165 -591 335 -174 172 -279 355 -344 601 -35 131 -44
382 -19 516 46 240 149 457 299 624 198 219 423 349 715 413 133 29 410 22
544 -14z"
            />
          </g>
          <ellipse
            stroke="null"
            ry="173"
            rx="173"
            id="svg_3"
            cy="193"
            cx="257"
            fill={null || "white"}
            fillOpacity={null || "0.8"}
          />
        </svg>
        <div className="map-marker__icon">
          <img src={iconImage} alt="Marker Icon" />
        </div>
      </div>
    </div>
  );
};

export default MapMarker;
