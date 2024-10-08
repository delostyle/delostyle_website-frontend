import React from 'react';
import ap1 from "../../../images/ap1.png";
import ap2 from "../../../images/ap2.png";
import ap3 from "../../../images/ap3.png";
import ap4 from "../../../images/ap4.png";

const HyApproach = ({ hybrid_data }) => {
  const items = [
    {
      title: "Developing Business Solutions",
      image: ap1,
    },
    {
      title: "Program Modeling and Analytics",
      image: ap2,
    },
    {
      title: "Improving Business Planning",
      image: ap3,
    },
    {
      title: "Delivering Business Solutions",
      image: ap4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 m-10 mx-2">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-xl p-4">
          <img src={item.image} alt={item.title} className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain" />
          <p className="text-center font-medium text-black mt-4 text-sm sm:text-lg lg:text-xl">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HyApproach;
