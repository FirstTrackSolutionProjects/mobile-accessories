import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar"; 
import Order from "./components/Order";
import Refer from "./components/Refer";
import Partner from "./components/Partner";
// import Upload from "./pages/Upload";
import Accessories from "./components/Accessories"; 
import Slideshow from "./components/Slideshow";
import Products from "./components/Products";
import SpecialOffers from "./components/SpecialOffers";
import MobileAccessories from "./components/MobileAccessories";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

import Shipping from "./components/Shipping";
import Returns from "./components/Return";
import Terms from "./components/Term";
import Privacy from "./components/Privacy";
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import HeadphonesPage from "./pages/HeadphonesPage";
import ChargersPage from "./pages/ChargersPage"; 
import CoversPage from "./pages/CoversPage"; 
import PowerBanksPage from "./pages/PowerBanksPage"; 
import TemperglassPage from "./pages/TemperglassPage"; 
import MobileLenspage from "./pages/MobileLenspage"; 
import USBCordsPage from "./pages/USBCordsPage"; 
import MemoryChipsPage from "./pages/MemoryChipsPage"; 
import EarphonesPage from "./pages/EarphonesPage"; 

const App = () => {

  return (
    <Router>
      <Navbar /> 
      <Routes>
     
         <Route
          path="/"
          element={
            <>
              <SearchBar/>
              <Accessories />
              <Slideshow />
              <Products />
              <SpecialOffers />
              <MobileAccessories />
              
              <Footer /> 


              
            </>
          }
        />

     
        <Route path="/order" element={<Order/>} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/partner" element={<Partner />} />
        {/* <Route path="/upload" element={<Upload />} /> */}
       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/chargers" element={<ChargersPage />} />
        <Route path="/covers" element={<CoversPage />} />
        <Route path="/powerbanks" element={<PowerBanksPage />} />
        <Route path="/temperglass" element={<TemperglassPage />} />
        <Route path="/mobilelens" element={<MobileLenspage />} />
        <Route path="/USBcords" element={<USBCordsPage />} />
        <Route path="/memorychips" element={<MemoryChipsPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />   
         
          <Route path="/About" 
          element={
            <> <About/>
            </>
        }/>    
         <Route path="/contact" 
          element={
          <>
              <Contact/>
              
          </>
        }
         />
         <Route path="/Shipping" 
          element={
          <>
              <Shipping and Delivery Policy/>
              
          </>
        }
         />  
          <Route path="/return" 
          element={
          <>
              <Returns and Refunds/>
              
          </>
        }
         />    
         <Route path="/Term" 
          element={
          <>
              <Terms and Conditions/>
              
          </>
        }
         />    
         <Route path="/privacy" 
          element={
          <>
              <Privacy and Policy/>
              
          </>
        }
         />    
     


  
      </Routes>
    </Router>
  );

};

export default App;
