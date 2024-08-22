import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
import ourwork4 from "../../../images/ourwork4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectGroCair = () => {
  return (
    <div className="p-6 md:p-12 lg:p-20 mx-4 md:mx-8 lg:mx-16">
      <div className="text-orange-500 text-xs md:text-sm font-semibold mb-2 flex items-center">
        <img src={bulbIcon} alt="bulb-icon" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
        BUSINESS • CONSULTING • PROJECT
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-4 md:mt-6 lg:mt-10">
        Grocair - The Grocery App
      </h1>
      <img 
        src={ourwork4}
        alt="Project Grocair"
        className="w-full rounded-lg mb-6"
      />
      <div className="relative flex flex-col md:flex-row text-md md:text-sm text-gray-600 mb-5">
        <div className="mb-2 md:mb-0 absolute left-0">
          <span className="font-bold text-orange-500 ">Location:</span>
          <span className="text-[#777777] mx-2">Arizona</span>
        </div>
        <div className="mb-2 md:mb-0 absolute right-0 text-right">
          <span className="font-bold text-orange-500">Year:</span>
          <span className="text-[#777777] mx-2">2021</span>
        </div>
      </div>

      <p className="text-[#777777] mb-4 mt-8">
        In an era where convenience and efficiency are paramount, Grocair stands out as a pioneering solution that redefines the grocery shopping experience. What started as a simple idea has materialized into a powerful, customer-driven application that is revolutionizing the way people shop for groceries. At [Your Organization's Name], we are proud to have developed Grocair, an app that not only meets the needs of consumers but also empowers businesses to thrive through effective inventory management.
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">The Vision Behind Grocair</h2>
      <p className="text-[#777777] mb-4">
        Grocair was conceived with a clear vision: to create a seamless and efficient grocery shopping experience for customers while providing robust tools for businesses to manage their inventory and operations. The goal was to develop a user-friendly platform that integrates all aspects of the grocery shopping journey, from browsing products to managing stocks and ensuring timely deliveries.
      </p>

      <span className="font-bold mb-4 block mt-6">Key Features of Grocair</span>
      <h6 className="font-bold mb-2 text-md md:text-lg lg:text-xl">1. Customer-Centric Design</h6>
      <p className="text-[#777777] mb-4">
        Grocair’s intuitive interface is designed with the customer in mind, making it easy to browse, search, and purchase groceries. Personalized recommendations and easy navigation enhance the shopping experience, ensuring customers find what they need quickly and efficiently.
      </p>
      <h6 className="font-bold mb-2 text-md md:text-lg lg:text-xl">2. Streamlined Procurement</h6>
      <p className="text-[#777777] mb-4">
        One of the standout features of Grocair is its real-time inventory management system. Businesses can monitor stock levels, track product movements, and manage restocking seamlessly. This feature ensures that shelves are always stocked, reducing the chances of out-of-stock items and enhancing customer satisfaction.
      </p>
      <h6 className="font-bold mb-2 text-md md:text-lg lg:text-xl">3. Streamlined Order Processing</h6>
      <p className="text-[#777777] mb-4">
        Grocair streamlines the order processing workflow, from order placement to delivery. Businesses can track orders in real-time, coordinate with delivery partners, and ensure timely and accurate deliveries. This efficiency not only improves operational productivity but also boosts customer trust and loyalty.
      </p>
      <h6 className="font-bold mb-2 text-md md:text-lg lg:text-xl">4. Data-Driven Insights</h6>
      <p className="text-[#777777] mb-4">
        The app provides valuable data-driven insights, helping businesses understand customer preferences, track sales trends, and make informed decisions. By leveraging these insights, grocery stores can optimize their offerings and tailor their services to meet the evolving demands of their customers.
      </p>

      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">The Future with Grocair</h2>
      <p className="text-[#777777] mb-4">
        Grocair is a game-changer in the retail industry, offering a comprehensive solution that bridges the gap between customer needs and business operations. Join us in transforming the grocery shopping experience with Grocair and drive success for both consumers and businesses alike.
      </p>
      <hr className="mt-10 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "100%" }} />
      <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-4 p-5">
        <h2 className="text-[#555555] text-sm md:text-base lg:text-lg">Share Project</h2>
        <div className="flex space-x-2 md:space-x-4">
          <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 md:h-10 md:w-10">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 md:h-10 md:w-10">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 md:h-10 md:w-10">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a href="#" className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-8 w-8 md:h-10 md:w-10">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectGroCair;
