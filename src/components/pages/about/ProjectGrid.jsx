import React, { useState } from 'react';
import ourwork2 from "../../images/ourwork2.png";
import ourwork3 from "../../images/ourwork3.png";
import ourwork4 from "../../images/ourwork4.png";
import ourwork5 from "../../images/ourwork5.png";

const ProjectCard = ({ image, title, link }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="absolute inset-0 bg-[#00274D99] bg-opacity-50 flex flex-col justify-between items-center text-white p-4">
      <h3 className="text-lg mt-2 text-center" style={{ fontSize: "24px" }}>{title}</h3>
      <a href={link} className="mb-2 px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-full">
        View Project
      </a>
    </div>
  </div>
);

const ProjectGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    { title: 'Project Rangamaati', image: ourwork2, link: '/cases/rangamaati' },
    { title: 'Project BetterBuild', image: ourwork3, link: '/cases/betterbuild' },
    { title: 'Project Grocair', image: ourwork4, link: '/cases/grocair' },
    { title: 'Project Eiffel', image: ourwork5, link: '/cases/effel' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (

    <div className="p-4 mt-8">
      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} image={project.image} link={project.link} />
        ))}
      </div>

      {/* Slider for mobile view */}
      <div className="block sm:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ProjectCard title={project.title} image={project.image} link={project.link} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProjectGrid;