import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Order from "./components/Order";
import Refer from "./components/Refer";
import Partner from "./components/Partner";
import Slideshow from "./components/Slideshow";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
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
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
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

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/return" element={<Returns />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* User Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Orders & Partner Pages */}
        <Route path="/order" element={<Order />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/partner" element={<Partner />} />

        {/* Product Pages */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
