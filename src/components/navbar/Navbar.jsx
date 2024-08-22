import React, { useState, useEffect } from "react";
// import "./NavBartop.css";
import "./navbar.css"
import logo from "../images/logo.svg";
import navbarImg from "../images/navbarImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isToggleOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleNavbar = () => {
    setIsOpen(!isToggleOpen);
  };
  const navigate=useNavigate()
  // document
  //   .getElementById("hamburgerMenu")
  //   .addEventListener("click", function () {
  //     this.classNameList.toggle("active");
  //   });
  const handleDropdown = (menu) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };
  //
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //
  const SocialIcon = ({ href, icon, size, className }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  );
  //
  const socialMediaLinks = [
    { href: "https://www.facebook.com/officialdelostylestudio/", icon: faFacebook },
    { href: "https://www.instagram.com/delostylestudio/", icon: faInstagram },
    { href: "https://www.youtube.com/@delostylestudio8426", icon: faYoutube },
    { href: "https://in.linkedin.com/company/delostylestudio", icon: faLinkedin },
  ];
  //
  const SocialItems = ({ className }) => (
    <div className={className}>
      {socialMediaLinks.map((link, index) => (
        <SocialIcon
          key={index}
          href={link.href}
          icon={link.icon}
          size="lg"
          className="text-white"
        />
      ))}
    </div>
  );
  //
  return (
    <div>
      <nav className="navbar">
        <img src={navbarImg} alt="Navbar Image" className="navbar-image" />
        <div className="navItemContainer">
          <div className="logoContainer">
            <img src={logo} alt="delostyle" className="logoMain" />
          </div>
          <div className="navLinksContainer">
            <SocialItems className="socialItems" />
            <div className="nav-Links-Container">
              <ul className=" flex justify-items-end" style={{}}>
                <li className="nav-Link"><a href="/" className="block py-2 px-3 text-white"> Home</a></li>
                <li className="nav-Link" id="aboutLink">
                  <a href="/" className="block py-2 px-3 text-white">About</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item "   onClick={()=>navigate("/about")}>About Us</a></li>
                      <li><a className="dropdown-item "  onClick={()=>navigate("/team")}> Team</a> </li>
                      <li><a className="dropdown-item "   onClick={()=>navigate("/clients")}> Clients</a> </li>
                      <li> <a className="dropdown-item "   onClick={()=>navigate("/history")}> History </a> </li>
                      <li> <a className="dropdown-item "   onClick={()=>navigate("/testimonials")}>Testimonials</a></li>
                      <li> <a className="dropdown-item "   onClick={()=>navigate("/careers")}>Careers</a> </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-Link" id="servicesLink">
                  <a href="/" className="block py-2 px-3 text-white">Services</a>
                  <div className="dropdown-menu">
                    <ul className="" aria-labelledby="servicesDropdown">
                        <li><a className="dropdown-item "  onClick={()=>navigate("/services")} >Our Services</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/hiringmodel")}>Dedicated Hiring Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/projectmodel")}>Project Based Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/hourmodel")}>Hour Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/taskmodel")}>Task Based Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/supportmodel")}>Support Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/hybridmodel")}>Hybrid Model</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/getquote")}>Get Quote</a></li>
                        <li><a className="dropdown-item "  onClick={()=>navigate("/faqs")}>FAQs</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-Link" style={{cursor:"pointer"}}> <a onClick={()=>navigate("/blog")}className="block py-2 px-3 text-white"> Blogs</a></li>
                <li className="nav-Link" style={{cursor:"pointer"}}><a onClick={()=>navigate("/contact")} className="block py-2 px-3 text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className={`hamburger-menu ${isToggleOpen ? "" : ""}`} id="hamburgerMenu" onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
      {/* toggle side-navbar */}
      <div className={`side-navbar ${isToggleOpen ? "open" : ""}`}>
        <div className="toggleHead ps-4">
          <img src={logo} alt="delostyle" className="logo-side" />
          <button className="toggle-close-btn" onClick={toggleNavbar}>×</button>
        </div>
        <ul className="toggle-ul">
          <li className="toggle-li"><a href="/" className="">Home</a></li>
          <li className="toggle-li">
            <a href="#" onClick={() => handleDropdown("about")}>About{" "}
              <span className="arrow-icon">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#18416b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </li>
          {dropdownOpen === "about" && (
            <div className={`toggle-dropdown-menu ${ dropdownOpen === "about" ? "open" : ""}`}>
                <ul>
                    <li><a className="text-white" onClick={()=>navigate("/about")}>About Us</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/team")}>Team</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/clients")}>Clients</a></li>
                </ul>
            </div>
          )}
          <li className="toggle-li">
            <a href="#" onClick={() => handleDropdown("services")}> Services{" "}
              <span className="arrow-icon">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="#18416b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
              </span>
            </a>
          </li>
          {dropdownOpen === "services" && (
            <div className={`toggle-dropdown-menu ${ dropdownOpen === "services" ? "open" : ""}`}>
                <ul>
                    <li><a className="text-white" onClick={()=>navigate("/services")}>Our Services</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/hiringmodel")}>Dedicated Hiring Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/projectmodel")}>Project Based Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/hourmodel")}>Hour Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/taskmodel")}>Task Based Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/supportmodel")}>Support Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/hybridmodel")}>Hybrid Model</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/getquote")}>GetQuote</a></li>
                    <li><a className="text-white" onClick={()=>navigate("/hourmodel")}>FAQ</a></li>
                </ul>
            </div>
          )}
          <li className="toggle-li"> <a href="/services">Blogs</a></li>
          <li className="toggle-li"> <a href="/contact">Contact</a></li>
        </ul>
        <div className="toggle-social">
          <SocialItems className="socialItems-toggle" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;