import React from 'react';
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 py-10 sm:py-14 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="w-full lg:w-[400px] md:w-[370px] h-[240px] sm:h-[240px] relative flex flex-col items-center justify-center mb-4 lg:mb-0">
            <img src={logo} alt="Delostyle Logo" className="h-20 mb-4 absolute top-0 left-0" />
            <p className="text-gray-500 w-[350px] mt-5 absolute left-0">
              Innovation Generation. Our team is inclined towards the client requirement and delivers with quality.
            </p>
            <div className="flex space-x-4 absolute bottom-0 left-0">
              <a
                href="https://www.facebook.com/officialdelostylestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.youtube.com/@delostylestudio8426"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/delostylestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://in.linkedin.com/company/delostylestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-orange-500 rounded-full p-2 h-10 w-10"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="text-gray-500">
              <li className="mb-2"><a href="#" className="hover:underline">Dedicated Hiring Model</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Project Based Model</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Task Based Model</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Hybrid Model</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Hour Model</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Support Model</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="text-gray-500">
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Case Studies</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Get Quote</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="text-gray-500">
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faPhone} size="lg" className="mr-2 text-orange-500" /> +916291095253
              </li>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2 text-orange-500" /> care@delostylestudio.com
              </li>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="mr-2 text-orange-500" /> 409, Rajdanga Block, BF-38, Shantipally, 1st Floor, Shantipally, Sector B
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="mr-2 text-orange-500" /> Globysn Crystals Black EP SaltLake 4th Floor Sector V
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm md:text-base">© DelostyleStudio Private Limited. All Rights Reserved</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;