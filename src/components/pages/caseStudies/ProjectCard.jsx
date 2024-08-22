import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ image, title, category, link, desc }) => {
  return (
    <div className="relative p-5 md:p-10 mx-5 md:mx-10 lg:mx-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center mb-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-5 lg:mb-0 lg:w-[500px] lg:h-[350px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 lg:mx-10 lg:w-[500px]">
          <div className="text-orange-500 font-semibold text-lg lg:text-xl">
            {category} <span className="text-orange-500 font-semibold">• PROJECT</span>
          </div>
          <h2 className="font-bold mb-2 mt-2 text-2xl lg:text-3xl">{title}</h2>
          <p className="text-[#777777] mt-5 overflow-hidden mb-10 text-base lg:text-lg">{desc}</p>
          <a href={link} className="bg-orange-500 mb-4 text-white py-2 px-4 rounded-full text-base lg:text-lg lg:py-3 lg:px-12 sm:py-3 sm:px-6">
  View Project
</a>

          <div className="flex space-x-4 mt-4 lg:mt-8 sm:mt-8">
            <span className="text-[#555555] text-base lg:text-lg">Share Project</span>
            <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
            <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-dashed border-2 opacity-20 border-[#00274D] w-full" />
    </div>
  );
}

export default ProjectCard;
