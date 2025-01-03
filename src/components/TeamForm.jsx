import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    coachName: "",
    coachNumber: "",
    official1Name: "",
    official1Number: "",
    teamPhoto: null,
  });
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, teamPhoto: e.target.files[0] });
    setWarning("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.teamPhoto) {
      setWarning("Harap unggah foto tim sekolah sebelum melanjutkan.");
      return;
    }

    console.log("Form submitted:", formData);
    // Navigasi ke pemain pertama setelah form tim selesai
    navigate("/playerform/1");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div>
            <label htmlFor="coachName" className="block text-sm font-medium text-gray-700">
              Nama Pelatih
            </label>
            <input
              type="text"
              id="coachName"
              name="coachName"
              value={formData.coachName}
              onChange={handleChange}
              placeholder="Masukin nama pelatih tim"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="coachNumber" className="block text-sm font-medium text-gray-700">
              Nomor Pelatih
            </label>
            <input
              type="text"
              id="coachNumber"
              name="coachNumber"
              value={formData.coachNumber}
              onChange={handleChange}
              placeholder="Masukin nomor pelatih"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="official1Name" className="block text-sm font-medium text-gray-700">
              Nama Official 1
            </label>
            <input
              type="text"
              id="official1Name"
              name="official1Name"
              value={formData.official1Name}
              onChange={handleChange}
              placeholder="Masukin nama official 1"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="official1Number" className="block text-sm font-medium text-gray-700">
              Nomor Official 1
            </label>
            <input
              type="text"
              id="official1Number"
              name="official1Number"
              value={formData.official1Number}
              onChange={handleChange}
              placeholder="Masukin nomor official 1"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Foto Tim Sekolah</label>
            <p className="text-sm text-gray-500 mb-4">Upload foto tim futsal sekolah dengan resolusi file besar (High Resolution)</p>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500">
              {formData.teamPhoto ? (
                <img src={URL.createObjectURL(formData.teamPhoto)} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
              ) : (
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              )}
              <label htmlFor="teamPhoto" className="mt-4 cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                <input id="teamPhoto" name="teamPhoto" type="file" className="hidden" onChange={handleFileChange} accept="image/*" required />
                Upload
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleBack} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
              Kembali
            </button>
            <button type="submit" className={`px-6 py-2 rounded-md ${formData.teamPhoto ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} disabled={!formData.teamPhoto}>
              Lanjut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
