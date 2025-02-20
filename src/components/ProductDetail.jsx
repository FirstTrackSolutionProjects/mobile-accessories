import React from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/cartSlice/cartSlice'

const productData = {
  1: [
    { id: 101, name: "Wireless Earbuds", originalPrice: "$50", offerPrice: "$40", image: "/assets/wireless_earbuds.jpg" },
    { id: 102, name: "Gaming Headset", originalPrice: "$80", offerPrice: "$60", image: "/assets/gaming_headset.jpg" },
    { id: 103, name: "Noise Cancelling Headphones", originalPrice: "$100", offerPrice: "$85", image: "/assets/noise_cancelling.jpg" },
    { id: 104, name: "In-Ear Monitors", originalPrice: "$60", offerPrice: "$50", image: "/assets/in_ear_monitor.jpg" },
    { id: 105, name: "Sport Earbuds", originalPrice: "$45", offerPrice: "$35", image: "/assets/sport_earbuds.jpg" },
    { id: 106, name: "Bass Boost Headphones", originalPrice: "$90", offerPrice: "$75", image: "/assets/bass_boost.jpg" },
    { id: 107, name: "Over-Ear Wireless", originalPrice: "$120", offerPrice: "$99", image: "/assets/over_ear.jpg" },
    { id: 108, name: "Hi-Res Audio Headphones", originalPrice: "$150", offerPrice: "$120", image: "/assets/hi_res.jpg" },
  ],
  5: [
    { id: 501, name: "10,000mAh Power Bank", originalPrice: "$30", offerPrice: "$25", image: "/assets/powerbank_10000.jpg" },
    { id: 502, name: "20,000mAh Fast Charge", originalPrice: "$50", offerPrice: "$40", image: "/assets/powerbank_20000.jpg" },
    { id: 503, name: "Solar Power Bank", originalPrice: "$60", offerPrice: "$50", image: "/assets/solar_powerbank.jpg" },
    { id: 504, name: "MagSafe Power Bank", originalPrice: "$80", offerPrice: "$65", image: "/assets/magsafe_powerbank.jpg" },
    { id: 505, name: "Ultra Slim Power Bank", originalPrice: "$45", offerPrice: "$35", image: "/assets/slim_powerbank.jpg" },
    { id: 506, name: "Wireless Charging Power Bank", originalPrice: "$70", offerPrice: "$55", image: "/assets/wireless_powerbank.jpg" },
    { id: 507, name: "Laptop Power Bank", originalPrice: "$100", offerPrice: "$85", image: "/assets/laptop_powerbank.jpg" },
    { id: 508, name: "High-Speed PD Power Bank", originalPrice: "$90", offerPrice: "$75", image: "/assets/pd_powerbank.jpg" },
  ],
  6: [
    { id: 601, name: "2X Zoom Mobile Lens", originalPrice: "$25", offerPrice: "$20", image: "/assets/zoom_lens.jpg" },
    { id: 602, name: "Macro Lens Kit", originalPrice: "$30", offerPrice: "$25", image: "/assets/macro_lens.jpg" },
    { id: 603, name: "Fisheye Lens", originalPrice: "$35", offerPrice: "$28", image: "/assets/fisheye_lens.jpg" },
    { id: 604, name: "Wide Angle Lens", originalPrice: "$40", offerPrice: "$32", image: "/assets/wide_angle_lens.jpg" },
    { id: 605, name: "Telephoto Lens", originalPrice: "$60", offerPrice: "$50", image: "/assets/telephoto_lens.jpg" },
    { id: 606, name: "Professional Camera Kit", originalPrice: "$80", offerPrice: "$65", image: "/assets/pro_camera_kit.jpg" },
    { id: 607, name: "Clip-On Lens Set", originalPrice: "$45", offerPrice: "$38", image: "/assets/clip_on_lens.jpg" },
    { id: 608, name: "Super Zoom Lens", originalPrice: "$90", offerPrice: "$75", image: "/assets/super_zoom.jpg" },
  ],
  7: [
    { id: 701, name: "32GB Memory Card", originalPrice: "$20", offerPrice: "$15", image: "/assets/memory_32gb.jpg" },
    { id: 702, name: "64GB Memory Card", originalPrice: "$30", offerPrice: "$25", image: "/assets/memory_64gb.jpg" },
    { id: 703, name: "128GB Memory Card", originalPrice: "$50", offerPrice: "$40", image: "/assets/memory_128gb.jpg" },
    { id: 704, name: "256GB Memory Card", originalPrice: "$80", offerPrice: "$65", image: "/assets/memory_256gb.jpg" },
    { id: 705, name: "512GB Memory Card", originalPrice: "$120", offerPrice: "$99", image: "/assets/memory_512gb.jpg" },
    { id: 706, name: "Micro SD Adapter", originalPrice: "$15", offerPrice: "$10", image: "/assets/micro_sd_adapter.jpg" },
    { id: 707, name: "Ultra Fast Memory Card", originalPrice: "$90", offerPrice: "$75", image: "/assets/ultra_fast_memory.jpg" },
    { id: 708, name: "Gaming Memory Card", originalPrice: "$70", offerPrice: "$55", image: "/assets/gaming_memory.jpg" },
  ],
  8: [
    { id: 801, name: "USB-C to USB-A Cable", originalPrice: "$15", offerPrice: "$10", image: "/assets/usb_c_to_a.jpg" },
    { id: 802, name: "USB-C to Lightning Cable", originalPrice: "$25", offerPrice: "$20", image: "/assets/usb_c_to_lightning.jpg" },
    { id: 803, name: "Braided USB Cord", originalPrice: "$20", offerPrice: "$15", image: "/assets/braided_usb.jpg" },
    { id: 804, name: "Multi-Function USB Cable", originalPrice: "$30", offerPrice: "$25", image: "/assets/multi_usb.jpg" },
    { id: 805, name: "USB 3.0 High-Speed Cable", originalPrice: "$18", offerPrice: "$14", image: "/assets/usb_3.jpg" },
    { id: 806, name: "Magnetic USB Cable", originalPrice: "$22", offerPrice: "$18", image: "/assets/magnetic_usb.jpg" },
    { id: 807, name: "Fast Charging USB Cord", originalPrice: "$28", offerPrice: "$22", image: "/assets/fast_charging_usb.jpg" },
    { id: 808, name: "Retractable USB Cable", originalPrice: "$35", offerPrice: "$28", image: "/assets/retractable_usb.jpg" },
  ],
};

const ProductDetail = () => {
  const { id } = useParams();
  const ourProducts = productData[id] || [];
  const dispatch = useDispatch()
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ourProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h3>
              <p className="text-gray-600">Original: <span className="line-through">{product.originalPrice}</span></p>
              <p className="text-red-500">Offer: {product.offerPrice}</p>
              <button onClick={()=> dispatch(addItem({item: product}))} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
