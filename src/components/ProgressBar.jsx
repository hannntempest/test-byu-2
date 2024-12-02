import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto overflow-hidden">
      {Array.from({ length: totalSteps + 1 }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Circle for Steps */}
          <div className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                index === currentStep ? "border-2 border-orange-500 text-orange-500" : index < currentStep ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index < currentStep ? "✓" : index + 1}
            </div>
            <span className={`ml-2 text-sm ${index === currentStep ? "text-orange-500 font-medium" : index < currentStep ? "text-gray-800" : "text-gray-500"}`}>
              {index === 0 ? "Informasi Tim" : `Pemain ${index}`} {/* Dynamic Labels */}
            </span>
          </div>

          {/* Line Between Circles */}
          {index < totalSteps && <div className={`flex-grow h-1 mx-2 ${index < currentStep ? "bg-blue-500" : "bg-gray-300"}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
