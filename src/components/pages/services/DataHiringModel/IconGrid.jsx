import React from 'react';
import icongrid1 from "../../../images/icongrid1.png";
import icongrid2 from "../../../images/icongrid2.png";
import icongrid3 from "../../../images/icongrid3.png";
import icongrid4 from "../../../images/icongrid4.png";

const IconGrid = () => {
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
    <div className="flex flex-wrap justify-center items-center mx-2 p-5" style={{ marginLeft: "-20px" }}>
      {items.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
          <div className="flex flex-col items-center w-[300px] h-[200px] justify-center rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
            <p className="text-center font-medium text-black mt-2 text-sm md:text-base">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
