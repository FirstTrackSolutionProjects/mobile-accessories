import React from "react";
import "./Products.css";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product5.jpg";
import product7 from "../assets/product5.jpg";
import product8 from "../assets/product5.jpg";
import product9 from "../assets/product5.jpg";

const products = [
  { id: 1, name: "Box Mishri", price: "₹10.00", originalPrice: "₹15.00", image: product1, store: "PotLood" },
  { id: 2, name: "Product 2", price: "₹89.99", originalPrice: "₹99.99", image: product2, store: "Store A" },
  { id: 3, name: "Product 3", price: "₹79.99", originalPrice: "₹89.99", image: product3, store: "Store B" },
  { id: 4, name: "Product 4", price: "₹69.99", originalPrice: "₹79.99", image: product4, store: "Store C" },
  { id: 5, name: "Product 5", price: "₹59.99", originalPrice: "₹69.99", image: product5, store: "Store D" },
  { id: 6, name: "Product 6", price: "₹59.99", originalPrice: "₹69.99", image: product6, store: "Store E" },
  { id: 7, name: "Product 7", price: "₹59.99", originalPrice: "₹69.99", image: product7, store: "Store F" },
  { id: 8, name: "Product 8", price: "₹59.99", originalPrice: "₹69.99", image: product8, store: "Store G" },
  { id: 9, name: "Product 9", price: "₹59.99", originalPrice: "₹69.99", image: product9, store: "Store H" },
];

const Products = () => {
  return (
    <div className="products-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="badge">Sale!</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              <span className="original-price">{product.originalPrice}</span>{" "}
              <span className="discounted-price">{product.price}</span>
            </p>
           
            <button className="add-to-cart">ADD TO CART</button>
            <p className="store">Store: <span>{product.store}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
