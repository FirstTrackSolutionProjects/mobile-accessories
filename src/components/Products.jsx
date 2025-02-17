// import React from "react";
// import "./Products.css";
// import product1 from "../assets/product1.jpg";
// import product2 from "../assets/product2.jpg";
// import product3 from "../assets/product3.jpg";
// import product4 from "../assets/product4.jpg";
// import product5 from "../assets/product5.jpg";
// import product6 from "../assets/product6.jpg";
// import product7 from "../assets/product7.jpg";
// import product8 from "../assets/product8.jpg";


// const products = [
//   { id: 1, name: "Product 1", price: "₹10.00", originalPrice: "₹15.00",   image: product1},
//   { id: 2, name: "Product 2", price: "₹89.99", originalPrice: "₹99.99",   image: product2},
//   { id: 3, name: "Product 3", price: "₹79.99", originalPrice: "₹89.99",   image: product3},
//   { id: 4, name: "Product 4", price: "₹169.99", originalPrice: "₹279.99", image: product4},
//   { id: 5, name: "Product 5", price: "₹100",    originalPrice: "₹250",    image: product5},
//   { id: 6, name: "Product 6", price: "₹100",   originalPrice: "₹200",     image: product6},
//   { id: 7, name: "Product 7", price: "₹250",   originalPrice: "₹400",     image: product7},
//   { id: 8, name: "Product 8", price: "₹150",   originalPrice: "₹200",     image: product8},
// ];

// const Products = () => {
//   return (
//     <div className="products-section">
//       <h2>Our Products</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="badge">Sale!</div>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>
//               <span className="original-price">{product.originalPrice}</span>{" "}
//               <span className="discounted-price">{product.price}</span>
//             </p>
           
//             <button className="add-to-cart">ADD TO CART</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const products = [
  { id: 1, name: "Product 1", price: "₹10.00", originalPrice: "₹15.00", image: product1 },
  { id: 2, name: "Product 2", price: "₹89.99", originalPrice: "₹99.99", image: product2 },
  { id: 3, name: "Product 3", price: "₹79.99", originalPrice: "₹89.99", image: product3 },
  { id: 4, name: "Product 4", price: "₹169.99", originalPrice: "₹279.99", image: product4 },
  { id: 5, name: "Product 5", price: "₹100", originalPrice: "₹250", image: product5 },
  { id: 6, name: "Product 6", price: "₹100", originalPrice: "₹200", image: product6 },
  { id: 7, name: "Product 7", price: "₹250", originalPrice: "₹400", image: product7 },
  { id: 8, name: "Product 8", price: "₹150", originalPrice: "₹200", image: product8 },
];

const Products = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale!</span>
                <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-md" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h3>
              <p className="text-gray-600">
                <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                <span className="text-green-600 font-semibold">{product.price}</span>
              </p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 font-semibold hover:bg-blue-600 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
