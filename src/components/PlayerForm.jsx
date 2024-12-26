import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PlayerForm = () => {
  const navigate = useNavigate();
  const { playerId } = useParams(); // Mendapatkan ID pemain dari URL
  const playerNumber = parseInt(playerId, 10); // Konversi ke angka

  // Hooks harus selalu dipanggil di awal fungsi
  const [formData, setFormData] = useState({
    playerName: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
  });

  // Validasi playerId setelah semua hooks
  if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 12) {
    navigate("/"); // Arahkan ke halaman awal jika playerId tidak valid
    return null; // Jangan render apapun
  }

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (playerNumber < 12) {
        navigate(`/playerform/${playerNumber + 1}`);
      } else {
        navigate("/success");
      }
    }
  };

  const handleBack = () => {
    if (playerNumber > 1) {
      navigate(`/playerform/${playerNumber - 1}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-white-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Form Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Masukan Informasi Pemain {playerNumber}</h2>
          <form onSubmit={handleNext} className="space-y-4">
            {/* Nama Pemain */}
            <div>
              <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
                Nama Pemain {playerNumber}
              </label>
              <input
                type="text"
                id="playerName"
                name="playerName"
                value={formData.playerName}
                onChange={handleChange}
                placeholder={`Masukan nama pemain ${playerNumber}`}
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
                placeholder={`Masukan nomor telepon pemain ${playerNumber}`}
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
                placeholder={`Masukan alamat email pemain ${playerNumber}`}
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
