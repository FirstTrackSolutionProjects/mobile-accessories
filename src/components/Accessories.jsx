import React from "react";
import { useNavigate } from "react-router-dom";
import "./Accessories.css";

import bestoffersImg from "../assets/ABestoffers.jpg";
import headphonesImg from "../assets/AHeadphones.jpg";
import chargersImg from "../assets/ACharger.jpg";
import coversImg from "../assets/ACovers.jpg";
import powerbanksImg from "../assets/APowerbanks.jpg";
import temperglassImg from "../assets/ATemperglass.jpg";
import mobilelensImg from "../assets/AMobilelens.jpg";
import usbcordImg from "../assets/AUsbcords.jpg";
import memorychipsImg from "../assets/AMemorychips.jpg";
import earphonesImg from "../assets/AEarphones.jpg";

const Accessories = () => {
  const navigate = useNavigate();

  const accessories = [
    { id: 1, name: "BestOffer", image: bestoffersImg, path: "/bestoffer" },
    { id: 2, name: "Headphones", image: headphonesImg, path: "/headphones" },
    { id: 3, name: "Chargers", image: chargersImg, path: "/chargers" },
    { id: 4, name: "Covers", image: coversImg, path: "/covers" },
    { id: 5, name: "Power Banks", image: powerbanksImg, path: "/powerbanks" },
    { id: 6, name: "Temper Glass", image: temperglassImg, path: "/temperglass" },
    { id: 7, name: "Mobile lens", image: mobilelensImg, path: "/mobilelens" },
    { id: 8, name: "USB cords", image: usbcordImg, path: "/USBcords" },
    { id: 9, name: "memory chips", image: memorychipsImg, path: "/memorychips" },
    { id: 10, name: "ear phones", image: earphonesImg, path: "/earphones" },
  ];

  return (
    <div className="accessories-section">
      <div className="accessories-scroll-container">
        <div className="accessories-container">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="accessory-item"
              onClick={() => navigate(accessory.path)}
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="accessory-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
