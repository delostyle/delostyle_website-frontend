import React from 'react';

const Stepper = () => {
  
  const steps = [
    "Identify the business requirements",
    "Identify possible resources",
    "Developing the requirements",
    "Delivering the business solutions"
  ];

  return (
    <ul className="mx-10 mt-10 ">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start p-0 m-0">
          <div className="flex flex-col items-center mr-4">
            <div className="w-10 h-10 bg-[#00274D] text-white rounded-full flex items-center justify-center text-lg font-bold">
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-grow w-1 bg-[#00274D] " style={{ height: '3rem' }}></div>
            )}
          </div>
          <span className="text-lg overflow-hidden"  style={{ color: '#00274D',fontSize:"24px" }}>{step}</span>
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
