import React from 'react';
import icongrid1 from "../../../images/icongrid1.png";
import icongrid2 from "../../../images/icongrid2.png";
import icongrid3 from "../../../images/icongrid3.png";
import icongrid4 from "../../../images/icongrid4.png";

const TaskGrid = ({ taskModel }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mx-2 p-5 lg:grid-cols-4"> 
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

export default TaskGrid;
