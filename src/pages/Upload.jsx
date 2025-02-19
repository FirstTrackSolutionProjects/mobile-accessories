// import { useState } from "react";

// export default function Upload() {
//   const [formData, setFormData] = useState({
//     executiveName: "",
//     executiveMobile: "",
//     storeName: "",
//     storeMobile: "",
//     date: "",
//     menuFile: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, menuFile: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("Menu uploaded successfully!");
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upload Menu</h2>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Executive Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">Executive Name *</label>
//           <input
//             type="text"
//             name="executiveName"
//             value={formData.executiveName}
//             onChange={handleChange}
//             placeholder="E.g. John Doe"
//             className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
//             required
//           />
//         </div>

//         {/* Executive Mobile */}
//         <div>
//           <label className="block text-gray-700 font-medium">Executive Mobile *</label>
//           <input
//             type="tel"
//             name="executiveMobile"
//             value={formData.executiveMobile}
//             onChange={handleChange}
//             placeholder="E.g. +1 300 400 5000"
//             className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
//             required
//           />
//         </div>

//         {/* Store Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">Store Name *</label>
//           <input
//             type="text"
//             name="storeName"
//             value={formData.storeName}
//             onChange={handleChange}
//             placeholder="E.g. enter store name"
//             className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
//             required
//           />
//         </div>

//         {/* Store Mobile */}
//         <div>
//           <label className="block text-gray-700 font-medium">Store Mobile *</label>
//           <input
//             type="tel"
//             name="storeMobile"
//             value={formData.storeMobile}
//             onChange={handleChange}
//             placeholder="E.g. +1 300 400 5000"
//             className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
//             required
//           />
//         </div>

//         {/* Date Picker */}
//         <div>
//           <label className="block text-gray-700 font-medium">Date *</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
//             required
//           />
//         </div>

//         {/* File Upload */}
//         <div className="border border-dashed border-gray-400 p-6 text-center rounded-lg">
//           <label className="block text-gray-700 font-medium mb-2">Upload Menu *</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id="file-upload"
//           />
//           <label htmlFor="file-upload" className="cursor-pointer text-green-600 hover:underline">
//             Choose Files
//           </label>
//           {formData.menuFile && <p className="mt-2 text-sm text-gray-600">{formData.menuFile.name}</p>}
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
//           UPLOAD MENU
//         </button>
//       </form>
//     </div>
//   );
// }
