import React from "react";

const Stepper = ({ currentStep, totalSteps }) => {
  const steps = ["Informasi Tim", ...Array.from({ length: 12 }, (_, i) => `Pemain ${i + 1}`), "Sukses"];

  // Hitung batas tampilan berdasarkan currentStep
  const startIndex = Math.max(0, currentStep - 4); // Mulai dari step sebelumnya
  const endIndex = Math.min(startIndex + 4, totalSteps); // Maksimal 4 step ditampilkan

  return (
    <div className="flex items-center mb-6">
      {steps.slice(startIndex, endIndex).map((step, index) => {
        const stepIndex = startIndex + index; // Index sebenarnya dalam semua langkah
        return (
          <React.Fragment key={stepIndex}>
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === stepIndex + 1 ? "bg-blue-500 text-white" : currentStep > stepIndex + 1 ? "bg-blue-300 text-white" : "bg-gray-300 text-gray-500"}`}>
                {currentStep > stepIndex + 1 ? "✓" : stepIndex + 1}
              </div>
              {/* Label */}
              <span className={`mt-2 text-sm ${currentStep === stepIndex + 1 ? "text-orange-500" : currentStep > stepIndex + 1 ? "text-blue-300" : "text-gray-500"}`}>{step}</span>
            </div>
            {/* Line */}
            {index < endIndex - startIndex - 1 && <div className={`flex-grow h-1 ${currentStep > stepIndex + 1 ? "bg-blue-500" : "bg-gray-300"}`}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
