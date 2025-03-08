import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
// import Cart from "./components/Cart.jsx";
import Order from "./components/Order";
import Refer from "./components/Refer";
import Partner from "./components/Partner";
import Slideshow from "./components/Slideshow";
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail.jsx";
import SpecialOffers from "./components/SpecialOffers";
import MobileAccessories from "./components/MobileAccessories";
import Testimonials from "./components/Testimonial";
import OverTeam from "./components/OurTeam";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Shipping from "./components/Shipping";
import Returns from "./components/Return";
import Terms from "./components/Term";
import Privacy from "./components/Privacy";
import LoginPage from "./components/LoginPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummary from "./pages/OrderSummary";

import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <div className="h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto flex flex-col bg-white">
        
        <div className="container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <Slideshow />
                  <Products />
                  <SpecialOffers />
                  <MobileAccessories />
                  <Testimonials />
                  <OverTeam />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/return" element={<Returns />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </div>
      </div>
    </Router>
    </CartProvider>
  );
};

export default App; // ✅ Ensure this is present
