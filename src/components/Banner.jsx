import React from "react";

const Banner = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-blue-800 font-bold text-lg">Banjarmasin</h2>
          <p className="text-gray-600 text-sm">11 - 14 Juli 2024</p>
          <p className="text-gray-600 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 3v4l3 3" />
            </svg>
            GOR PANGSUMA
          </p>
        </div>
        <div>
          <img src={require("./banjar.png")} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
