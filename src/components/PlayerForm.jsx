import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    playerName: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
  });

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/success");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Banjarmasin</h1>
            <p className="text-sm text-gray-500">11 - 14 Juli 2024</p>
            <p className="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 3v4l3 3" />
              </svg>
              GOR PANGSUMA
            </p>
          </div>
          <div className="w-16">
            <img src="/telkom.png" alt="Logo" className="w-full" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs font-bold">✓</div>
            <span className="ml-2 text-sm font-medium text-blue-500">Informasi Tim</span>
          </div>
          <div className="flex-grow h-1 bg-blue-500 mx-2"></div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs font-bold">1</div>
            <span className="ml-2 text-sm font-medium text-blue-500">Pemain 1</span>
          </div>
          <div className="flex-grow h-1 bg-gray-300 mx-2"></div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 text-gray-600 flex items-center justify-center rounded-full text-xs font-bold">2</div>
            <span className="ml-2 text-sm text-gray-500">Pemain 2</span>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Masukan Informasi Pemain 1</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nama Pemain */}
            <div>
              <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
                Nama Pemain 1
              </label>
              <input
                type="text"
                id="playerName"
                name="playerName"
                value={formData.playerName}
                onChange={handleChange}
                placeholder="Masukin nama pemain 1"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Nomor Telepon */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Nomor Telepon
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Masukin nomor telepon pemain 1"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukin alamat email pemain 1"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button type="button" onClick={handleBack} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
                Kembali
              </button>
              <button type="submit" disabled={!isFormValid} className={`px-6 py-2 rounded-md ${isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
                Lanjut
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerForm;
