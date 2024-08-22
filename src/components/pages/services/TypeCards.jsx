import React from 'react';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.png';
import s5 from '../../images/s5.png';
import s6 from '../../images/s6.png';

const services = [
  { icon: s1, title: 'Dedicated Hiring Model' },
  { icon: s2, title: 'Project Based Model' },
  { icon: s3, title: 'Hour Model' },
  { icon: s4, title: 'Task Based Model' },
  { icon: s5, title: 'Support Model' },
  { icon: s6, title: 'Hybrid Model' },
];

const TypeCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-2 relative z-10 " >
   {services.map((service, index) => (
  <div
    key={index}
    className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center "
    style={{
      height: "35vh",
      width: "30vh",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)"
    }}
  >
    <div className="mb-4">
      <img src={service.icon} alt={service.title} className="w-15 h-20" />
    </div>
    <h2 className="text-lg font-semibold">{service.title}</h2>
    <button className="bg-orange-500 text-white py-1 px-6 rounded-full mt-5" style={{fontSize:"20px"}}>Read More</button>
  </div>
))}


    </div>
  );
};

export default TypeCards;
