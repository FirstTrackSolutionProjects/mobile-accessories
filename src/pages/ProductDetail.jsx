import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/cartslice/cartslice'


const productData = {
   1: [ //bluetooth earphones
    { id: 101, name: "Wireless Earbuds", originalPrice: "$50", offerPrice: "$40", image: "/assets/BT-Earphones-1.jpg" },
    { id: 102, name: "Gaming Headset", originalPrice: "$80", offerPrice: "$60", image: "/assets/BT-Earphones-2.jpg" },
    { id: 103, name: "Noise Cancelling Headphones", originalPrice: "$100", offerPrice: "$85", image: "/assets/BT-Earphones-3.jpg" },
    { id: 104, name: "Wired Earphones", originalPrice: "$60", offerPrice: "$50", image: "/assets/BT-Earphones-4.jpg" },
    { id: 105, name: "Sport Earbuds", originalPrice: "$45", offerPrice: "$35", image: "/assets/BT-Earphones-5.jpg" },
    { id: 106, name: "Bass Boost Headphones", originalPrice: "$90", offerPrice: "$75", image: "/assets/BT-Earphones-6.jpg" },
    { id: 107, name: "Neckband", originalPrice: "$120", offerPrice: "$99", image: "/assets/BT-Earphones-7.jpg" },
    { id: 108, name: "Hi-Res Audio Headphones", originalPrice: "$150", offerPrice: "$120", image: "/assets/BT-Earphones-8.jpg" },
  ],
  2: [ // Chargers Data
    { id: 901, name: "Wireless Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger1.jpg" },
    { id: 902, name: "Portable Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger2.jpg" },
    { id: 903, name: "Multi-port Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger3.jpg" },
    { id: 904, name: "USB-A Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger4.jpg" },
    { id: 905, name: "boAt 18W Power WCD QC3A Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger5.jpg" },
    { id: 906, name: "Maquter Fast Charger For Nokia", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger6.jpg" },
    { id: 907, name: "Samsung Galaxy S20 FE Type C Adaptive Fast Mobile Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger7.jpg" },
    { id: 908, name: "Apple iPhone 5W Mobile Charger", originalPrice: "$2499", offerPrice: "$859", image: "/assets/charger8.jpg" },
  ],
  3: [ // Covers Data
    { id: 1001, name: "Silicone Back Cover", originalPrice: "$999", offerPrice: "$499", image: "/assets/cover1.jpg" },
    { id: 1002, name: "Leather Flip Cover", originalPrice: "$1499", offerPrice: "$799", image: "/assets/cover2.jpg" },
    { id: 1003, name: "Transparent TPU Case", originalPrice: "$799", offerPrice: "$399", image: "/assets/cover3.jpg" },
    { id: 1004, name: "Carbon Fiber Case", originalPrice: "$1199", offerPrice: "$599", image: "/assets/cover4.jpg" },
    { id: 1005, name: "Shockproof Armor Case", originalPrice: "$1599", offerPrice: "$899", image: "/assets/cover5.jpg" },
    { id: 1006, name: "Wallet Flip Cover", originalPrice: "$1299", offerPrice: "$699", image: "/assets/cover6.jpg" },
    { id: 1007, name: "Matte Finish Hard Case", originalPrice: "$899", offerPrice: "$459", image: "/assets/cover7.jpg" },
    { id: 1008, name: "3D Printed Designer Case", originalPrice: "$1099", offerPrice: "$549", image: "/assets/cover8.jpg" },
  ],
  4: [ // Tempered Glass Data
    { id: 1101, name: "9H Hardness Screen Protector", originalPrice: "$499", offerPrice: "$299", image: "/assets/tempered1.jpg" },
    { id: 1102, name: "Anti-Glare Tempered Glass", originalPrice: "$599", offerPrice: "$399", image: "/assets/tempered2.jpg" },
    { id: 1103, name: "Privacy Screen Guard", originalPrice: "$699", offerPrice: "$499", image: "/assets/tempered3.jpg" },
    { id: 1104, name: "Edge-to-Edge Protection", originalPrice: "$499", offerPrice: "$349", image: "/assets/tempered4.jpg" },
    { id: 1105, name: "Matte Finish Tempered Glass", originalPrice: "$599", offerPrice: "$399", image: "/assets/tempered5.jpg" },
    { id: 1106, name: "Shatterproof Screen Guard", originalPrice: "$799", offerPrice: "$599", image: "/assets/tempered6.jpg" },
    { id: 1107, name: "HD Clarity Tempered Glass", originalPrice: "$699", offerPrice: "$499", image: "/assets/tempered7.jpg" },
    { id: 1108, name: "Self-Healing Screen Protector", originalPrice: "$899", offerPrice: "$699", image: "/assets/tempered8.jpg" },
  ],
  5: [ //power bank
    { id: 501, name: "10,000mAh Power Bank", originalPrice: "$30", offerPrice: "$25", image: "/assets/powerbank-1.jpg" },
    { id: 502, name: "20,000mAh Fast Charge", originalPrice: "$50", offerPrice: "$40", image: "/assets/powerbank-2.jpg" },
    { id: 503, name: "Solar Power Bank", originalPrice: "$60", offerPrice: "$50", image: "/assets/powerbank-3.jpg" },
    { id: 504, name: "MagSafe Power Bank", originalPrice: "$80", offerPrice: "$65", image: "/assets/powerbank-4.jpg" },
    { id: 505, name: "Ultra Slim Power Bank", originalPrice: "$45", offerPrice: "$35", image: "/assets/powerbank-5.jpg" },
    { id: 506, name: "Wireless Charging Power Bank", originalPrice: "$70", offerPrice: "$55", image: "/assets/powerbank-6.jpg" },
    { id: 507, name: "Laptop Power Bank", originalPrice: "$100", offerPrice: "$85", image: "/assets/powerbank-7.jpg" },
    { id: 508, name: "High-Speed PD Power Bank", originalPrice: "$90", offerPrice: "$75", image: "/assets/powerbank-8.jpg" },
  ],
  6: [  //mobile lens
    { id: 601, name: "2X Zoom Mobile Lens", originalPrice: "$25", offerPrice: "$20", image: "/assets/mobilelens-1.jpg" },
    { id: 602, name: "Macro Lens Kit", originalPrice: "$30", offerPrice: "$25", image: "/assets/mobilelens-2.jpg" },
    { id: 603, name: "Fisheye Lens", originalPrice: "$35", offerPrice: "$28", image: "/assets/mobilelens-3.jpg" },
    { id: 604, name: "Wide Angle Lens", originalPrice: "$40", offerPrice: "$32", image: "/assets/mobilelens-4.jpg" },
    { id: 605, name: "Telephoto Lens", originalPrice: "$60", offerPrice: "$50", image: "/assets/mobilelens-5.jpg" },
    { id: 606, name: "Professional Camera Kit", originalPrice: "$80", offerPrice: "$65", image: "/assets/mobilelens-6.jpg" },
    { id: 607, name: "Clip-On Lens Set", originalPrice: "$45", offerPrice: "$38", image: "/assets/mobilelens-7.jpg" },
    { id: 608, name: "Super Zoom Lens", originalPrice: "$90", offerPrice: "$75", image: "/assets/mobilelens-8.jpg" },
  ],
 
  7: [  //memory chips
    { id: 701, name: "32GB Memory Card", originalPrice: "$20", offerPrice: "$15", image: "/assets/memorychips-1.jpg" },
    { id: 702, name: "64GB Memory Card", originalPrice: "$30", offerPrice: "$25", image: "/assets/memorychips-2.jpg" },
    { id: 703, name: "128GB Memory Card", originalPrice: "$50", offerPrice: "$40", image: "/assets/memorychips-3.jpg" },
    { id: 704, name: "256GB Memory Card", originalPrice: "$80", offerPrice: "$65", image: "/assets/memorychips-4.jpg" },
    { id: 705, name: "512GB Memory Card", originalPrice: "$120", offerPrice: "$99", image: "/assets/memorychips-5.jpg" },
    { id: 706, name: "Micro SD Adapter", originalPrice: "$15", offerPrice: "$10", image: "/assets/memorychips-6.jpg" },
    { id: 707, name: "Ultra Fast Memory Card", originalPrice: "$90", offerPrice: "$75", image: "/assets/memorychips-7.jpg" },
    { id: 708, name: "Gaming Memory Card", originalPrice: "$70", offerPrice: "$55", image: "/assets/memorychips-8.jpg" },
  ],
  8: [ //usb cords
    { id: 801, name: "USB-C to USB-A Cable", originalPrice: "$15", offerPrice: "$10", image: "/assets/usbcord-1.jpg" },
    { id: 802, name: "USB-C to Lightning Cable", originalPrice: "$25", offerPrice: "$20", image: "/assets/usbcord-2.jpg" },
    { id: 803, name: "Braided USB Cord", originalPrice: "$20", offerPrice: "$15", image: "/assets/usbcord-3.jpg" },
    { id: 804, name: "Multi-Function USB Cable", originalPrice: "$30", offerPrice: "$25", image: "/assets/usbcord-4.jpg" },
    { id: 805, name: "USB 3.0 High-Speed Cable", originalPrice: "$18", offerPrice: "$14", image: "/assets/usbcord-5.jpg" },
    { id: 806, name: "Magnetic USB Cable", originalPrice: "$22", offerPrice: "$18", image: "/assets/usbcord-6.jpg" },
    { id: 807, name: "Fast Charging USB Cord", originalPrice: "$28", offerPrice: "$22", image: "/assets/usbcord-7.jpg" },
    { id: 808, name: "Retractable USB Cable", originalPrice: "$35", offerPrice: "$28", image: "/assets/usbcord-8.jpg" },
  ],
};


const ProductDetail = () => {
  const { id } = useParams();
  const ourProducts = productData[id] || [];
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    navigate("/cart"); 
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ourProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h3>
              <p className="text-gray-600">
                Original: <span className="line-through">{product.originalPrice}</span>
              </p>
              <p className="text-red-500">Offer: {product.offerPrice}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;