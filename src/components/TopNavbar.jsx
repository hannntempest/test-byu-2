import React from "react";

const TopNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <div>
        <img src={require("../assets/sma-banjar.png")} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
      </div>
      <div className="text-lg font-bold">SMA 1 Banjarmasin</div>
      <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
        </svg>
      </button>
    </nav>
  );
};

export default TopNavbar;
