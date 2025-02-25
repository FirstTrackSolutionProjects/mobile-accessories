import { useState } from "react";

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userName = "Adya Ananya Mishra";
  const stats = [
    { title: "Total Warehouses", value: 0 },
    { title: "Total Shipments", value: 0 },
    { title: "Total Delivered", value: 0 },
    { title: "Pending Pickups", value: 0 },
    { title: "Total Wallet Recharge", value: 0 },
    { title: "Parcel on Process", value: 0 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5 relative">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="text-lg font-bold text-green-600">FIRST TRACK</div>
        <button onClick={() => setIsSidebarOpen(true)} className="text-2xl">&#9776;</button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsSidebarOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform 
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>

        <button onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl absolute right-4 top-4">&times;</button>
        <ul className="p-6 space-y-4">
          <li className="text-lg font-bold">📊 Dashboard</li>
          <li className="text-lg">💰 Wallet Recharge</li>
          <li className="text-lg">📦 Create Shipment</li>
          <li className="text-lg">🏠 Warehouse</li>
          <li className="text-lg">🚚 Parcels</li>
          <li className="text-lg">🔄 Transaction History</li>
          <li className="text-lg">📑 Reports</li>
          <li className="text-lg">⚙ Settings</li>
          <li className="text-lg">🚪 Logout</li>
        </ul>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mt-4">
          <strong className="font-bold">✔ Login Successful</strong>
          <button onClick={() => setShowAlert(false)} className="absolute right-2 top-2">✖</button>
        </div>
      )}

      {/* Welcome Message */}
      <h2 className="text-center text-lg font-bold mt-6">
        Welcome <span className="font-extrabold">{userName}</span>!
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold">{stat.title}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;