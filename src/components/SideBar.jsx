// import React, { useState } from 'react';

// const SidebarNavigation = () => {
//     const [activePage, setActivePage] = useState('home');

//     const pages = {
//         home: 'Welcome to the Home Page!',
//         allProducts: 'Here are all the products we offer.',
//         myOrders: 'View your orders here.',
//         referEarn: 'Refer your friends and earn rewards!',
//         partner: 'Learn more about partnership opportunities.',
//         aboutUs: 'About Us: Learn more about our company.',
//     };

//     return (
//         <div style={{ display: 'flex', height: '100vh' }}>
//             <div style={{ width: '250px', backgroundColor: '#f9f9f9', borderRight: '1px solid #ddd', padding: '20px', boxSizing: 'border-box' }}>
//                 <nav>
//                     <a href="#" onClick={() => setActivePage('home')} style={linkStyle}>Home</a>
//                     <a href="#" onClick={() => setActivePage('allProducts')} style={linkStyle}>All Products</a>
//                     <a href="#" onClick={() => setActivePage('myOrders')} style={linkStyle}>My Orders</a>
//                     <a href="#" onClick={() => setActivePage('referEarn')} style={linkStyle}>Refer & Earn</a>
//                     <a href="#" onClick={() => setActivePage('partner')} style={linkStyle}>Partner</a>
//                     <a href="#" onClick={() => setActivePage('aboutUs')} style={linkStyle}>About Us</a>
//                 </nav>
//             </div>
//             <div style={{ flex: 1, padding: '20px' }}>
//                 <div>{pages[activePage]}</div>
//             </div>
//         </div>
//     );
// };

// const linkStyle = {
//     display: 'block',
//     textDecoration: 'none',
//     color: '#28a745',
//     fontSize: '16px',
//     margin: '10px 0',
//     transition: 'color 0.3s',
//     cursor: 'pointer',
// };

// export default SidebarNavigation;
