import React from 'react';
import careergrid1 from "../../images/careergrid1.png";
import careergrid2 from "../../images/careergrid2.png";
import careergrid3 from "../../images/careergrid3.png";
import careergrid4 from "../../images/careergrid4.png";

const ImageGrid = () => {
  const items = [
    {
      title: "Development Unit",
      image: careergrid1,
    },
    {
      title: "Customized Talent Acquisition",
      image: careergrid2,
    },
    {
      title: "Software Support",
      image: careergrid3,
    },
    {
      title: "Administrative Unit",
      image: careergrid4,
    },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center mx-2 p-5 md:p-10 lg:p-20">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" /* Adjusting width based on screen size */
        >
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg relative">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 h-20 flex items-center justify-center">
              <p className="text-center font-medium text-[#00274D]" style={{ fontSize: "16px", lineHeight: "1.5rem" }}>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
