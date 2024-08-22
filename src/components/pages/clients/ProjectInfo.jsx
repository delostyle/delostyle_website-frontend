import React from 'react';
import Slider from 'react-slick';
import ourwork2 from "../../images/ourwork2.png";
import ourwork3 from "../../images/ourwork3.png";
import ourwork4 from "../../images/ourwork4.png";
import ourwork5 from "../../images/ourwork5.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ image, title, link }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="absolute inset-0 bg-[#00274D99] bg-opacity-50 flex flex-col justify-between items-center text-white p-4">
      <h3 className="text-lg mt-2 text-center" style={{ fontSize: "20px" }}>{title}</h3>
      <a href={link} className="mb-2 px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-full text-sm">
        View Project
      </a>
    </div>
  </div>
);

const ProjectInfo = () => {
  const projects = [
    { title: 'Project Rangamaati', image: ourwork2, link: '/cases/rangamaati' },
    { title: 'Project BetterBuild', image: ourwork3, link: '/cases/betterbuild' },
    { title: 'Project Grocair', image: ourwork4, link: '/cases/grocair' },
    { title: 'Project Eiffel', image: ourwork5, link: '/cases/effel' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '16px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="p-4 mt-8">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} image={project.image} link={project.link} />
        ))}
      </div>

      {/* Mobile and Tablet Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} image={project.image} link={project.link} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectInfo;