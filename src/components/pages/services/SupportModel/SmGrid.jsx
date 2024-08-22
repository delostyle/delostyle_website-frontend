import React from 'react';
import icongrid1 from "../../../images/icongrid1.png";
import icongrid2 from "../../../images/icongrid2.png";
import icongrid3 from "../../../images/icongrid3.png";
import icongrid4 from "../../../images/icongrid4.png";

const SmGrid = () => {
  const items = [
    {
      title: "Server Side Language",
      image: icongrid1,
    },
    {
      title: "Database Specialization",
      image: icongrid2,
    },
    {
      title: "Front-end Technology",
      image: icongrid3,
    },
    {
      title: "Project Management",
      image: icongrid4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mx-4 sm:mx-10 lg:mx-20"> 
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-xl p-4 m-2">
          <img src={item.image} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain mb-4" />
          <p className="text-center font-medium text-black text-sm sm:text-lg lg:text-xl max-w-[200px]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SmGrid;
