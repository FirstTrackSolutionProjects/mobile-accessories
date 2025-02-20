import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <form 
        onSubmit={handleSearch} 
        className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-[400px] shadow-sm"
      >
        <FiSearch className="text-black mr-2" size={20} /> 
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent w-full text-gray-700"
        />
      </form>
    </div>
  );
};

export default SearchBar;
