import React from "react";

const TeamHeader = () => {
  return (
    <div className="bg-gray shadow-md mb-4 rounded-lg p-6 flex items-center justify-between">
      {/* Text Section */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Data Pemain Piala by.U</h1>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">Masukan Informasi Tim</h2>
      </div>

      {/* Badge Section */}
      <div className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">Kategori SMA</div>
    </div>
  );
};

export default TeamHeader;
