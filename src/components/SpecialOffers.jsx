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
            <img src="/assets/EarBuds.jpg" alt="Earpods" />
            <p>Earbuds</p>
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
            <img src="/assets/Type C Charger.jpg" alt="Type C Charger" />
            <p>Type C Charger</p>
            <span>Special offer</span>
          </div>
          <div className="product">
            <img src="/assets/Adaptor.jpg" alt="Adaptors" />
            <p>Adaptors</p>
            <span>Min. 50% Off</span>
          </div>
        </div>
        <div className="offer-category">
          <h3>Top Offers Ending Soon</h3>
          <div className="product">
            <img src="/assets/Mobile Phone Lens.jpg" alt="Mobile Phone Lens"/>
            <p>Mobile Phone Lens</p>
            <span>Special offer</span>
          </div>
          <div className="product">
            <img src="/assets/tripod.jpg" alt="Tripods" />
            <p>Tripods</p>
            <span>Min. 40% Off</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
