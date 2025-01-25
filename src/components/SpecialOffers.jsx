import React from "react";
import "./SpecialOffers.css";

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      <h2>Special Offers</h2>
      <div className="offers-row">
        <div className="offer-category">
          <h3>New Year Specials</h3>
          <div className="product">
            <img src="/assets/PowerBanks.jpg" alt="PowerBanks" />
            <p>PowerBanks</p>
            <span>Min. 50% Off</span>
          </div>
          <div className="product">
            <img src="/assets/PenDrives.jpg" alt="PenDrives" />
            <p>PenDrives</p>
            <span>Min. 50% Off</span>
          </div>
        </div>
        <div className="offer-category">
          <h3>Special Days Special Offers</h3>
          <div className="product">
            <img src="/assets/Speakers.jpg" alt="Speakers" />
            <p>Speakers</p>
            <span>Special offer</span>
          </div>
          <div className="product">
            <img src="/assets/Wireless Earphones.jpg" alt="Wireless Earphones" />
            <p>Wireless Earphones</p>
            <span>Min. 50% Off</span>
          </div>
        </div>
        <div className="offer-category">
          <h3>Most Discounted Deals Here</h3>
          <div className="product">
            <img src="/assets/bath-brush.jpg" alt="Bath Brush" />
            <p>Bath Brush</p>
            <span>Special offer</span>
          </div>
          <div className="product">
            <img src="/assets/deodorants.jpg" alt="Deodorants" />
            <p>Deodorants</p>
            <span>Min. 50% Off</span>
          </div>
        </div>
        <div className="offer-category">
          <h3>Top Offers Ending Soon</h3>
          <div className="product">
            <img src="/assets/bath-brush.jpg" alt="Bath Brush" />
            <p>Bath Brush</p>
            <span>Special offer</span>
          </div>
          <div className="product">
            <img src="/assets/deodorants.jpg" alt="Deodorants" />
            <p>Deodorants</p>
            <span>Min. 50% Off</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
