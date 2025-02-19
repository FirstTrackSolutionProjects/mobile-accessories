export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        
        {/* Login Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
            <div className="flex gap-2 mt-1">
              <select className="border border-gray-300 rounded p-2">
                <option>IN +91</option>
              </select>
              <input type="text" placeholder="Enter phone number" className="border border-gray-300 rounded p-2 w-full" />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="bg-black text-white py-2 px-4 rounded">LOGIN WITH OTP</button>
            <button className="bg-black text-white py-2 px-4 rounded">LOGIN WITH EMAIL & PASSWORD</button>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
            <div className="flex gap-2 mt-1">
              <select className="border border-gray-300 rounded p-2">
                <option>IN +91</option>
              </select>
              <input type="text" placeholder="Enter phone number" className="border border-gray-300 rounded p-2 w-full" />
              <button className="text-blue-500 text-sm">VERIFY</button>
            </div>
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Username <span className="text-red-500">*</span></label>
            <input type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter username" />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Email address <span className="text-red-500">*</span></label>
            <input type="email" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter email" />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
            <input type="password" className="border border-gray-300 rounded p-2 w-full" placeholder="Enter password" />
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for purposes described in our <a href="#" className="text-blue-600">privacy policy</a>.
          </p>
          <button className="bg-black text-white py-2 px-4 w-full mt-4 rounded">REGISTER</button>
        </div>

      </div>
    </div>
  );
}

