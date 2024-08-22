import React from 'react';
import bulbIcon from "../../../images/bulbIcon.png";
import betterbuild from "../../../images/betterbuild.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProjectBetterBuild = () => {
  return (
    <div className="p-8 md:p-16 lg:p-20 mx-4 md:mx-10 lg:mx-20" style={{ fontSize: "20px" }}>
      <div className="text-orange-500 text-sm md:text-base font-semibold mb-2 flex items-center">
        <img src={bulbIcon} alt="bulb-icon" className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
        BUSINESS • CONSULTING • PROJECT
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 mt-4 md:mt-5">
        BetterBuild - Future Of The Industry
      </h1>
      <img 
        src={betterbuild}
        alt="Project BetterBuild" 
        className="w-full rounded-lg mb-6"
      />
     <div className="flex flex-col md:flex-row justify-between text-xs md:text-sm text-gray-600 mb-5 relative">
  <div className="mb-2 md:mb-0 absolute left-0">
    <span className="font-bold text-orange-500">Location:</span>
    <span className="text-[#777777] mx-2">Arizona</span>
  </div>
  <div className="mb-2 md:mb-0 absolute right-0 text-right">
    <span className="font-bold text-orange-500">Year:</span>
    <span className="text-[#777777] mx-2">2021</span>
  </div>
</div>

      <p className="text-gray-700 mb-4 mt-8">
        In today's fast-evolving construction landscape, the need for a robust, integrated application that seamlessly connects general contractors, sub-contractors, and the entire supply chain has never been more critical. At DeloStyle, we are proud to introduce BetterBuild, a groundbreaking application designed to revolutionize the construction industry across the North American market.
      </p>
      <h2 className="text-lg md:text-xl font-bold mb-4">The Vision Behind BetterBuild</h2>
      <p className="text-gray-700 mb-4">
        BetterBuild was conceived with a singular vision: to create an ecosystem that bridges the gap between all stakeholders in the construction process. Our aim was to develop a comprehensive platform that integrates every aspect of the supply chain—from project bids to procurement, project delivery, and payments. This holistic approach ensures that all participants, from general contractors to sub-contractors, can collaborate more efficiently, ultimately driving productivity and profitability.
      </p>
      <span className="font-bold mb-4 mt-6 block">Key Features of BetterBuild</span>
      <h6 className="font-bold mb-2 mt-4 text-base">1. Seamless Project Bidding</h6>
      <p className="text-gray-700 mb-4">
        The project bidding feature allows general contractors to post project opportunities and invite sub-contractors to submit their bids. This transparent and competitive environment ensures that projects are awarded to the most qualified and cost-effective bidders.
      </p>
      <h6 className="font-bold mb-2 mt-4 text-base">2. Streamlined Procurement</h6>
      <p className="text-gray-700 mb-4">
        BetterBuild's procurement module simplifies the purchasing process, allowing users to manage orders, track inventory, and coordinate deliveries seamlessly. By integrating suppliers directly into the platform, we ensure that materials and services are procured efficiently and cost-effectively.
      </p>
      <h6 className="font-bold mb-2 mt-4 text-base">3. Efficient Project Delivery</h6>
      <p className="text-gray-700 mb-4">
        Our project delivery tools enable real-time collaboration and communication among all project stakeholders. From project managers to on-site workers, everyone can access up-to-date information, track progress, and address issues promptly, ensuring that projects are completed on time and within budget.
      </p>
      <h6 className="font-bold mb-2 mt-4 text-base">4. Integrated Payment Systems</h6>
      <p className="text-gray-700 mb-4">
        BetterBuild's integrated payment system facilitates secure and timely transactions between general contractors, sub-contractors, and suppliers. This feature ensures that all parties are compensated fairly and promptly, reducing financial friction and fostering trust.
      </p>
      <h2 className="text-lg md:text-xl font-bold mb-4">Testimonial</h2>
      <p className="text-gray-700 mb-4">
        We at Dunamis Pacific enjoyed partnering with DeloStyle. They were extremely professional. What I personally felt commendable is their focus on seeking clarity on the requirements & their ability to provide multiple solution options with quick turnarounds resulting in minimal reworks and on-time delivery.
      </p>
      <hr className="mt-10 border-dashed border-2 opacity-20" style={{ borderColor: "#00274D", width: "100%" }} />
      <div className="flex flex-col items-center md:flex-row md:items-center justify-end space-y-4 md:space-y-0 md:space-x-4 p-5">
        <h2 className="text-[#555555] text-sm md:text-base">Share Project</h2>
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

export default ProjectBetterBuild;
