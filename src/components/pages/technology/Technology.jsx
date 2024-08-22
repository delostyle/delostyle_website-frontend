import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from './useWindowSize';
import "./technology.css";
import html from "../../images/html.png";
import css from '../../images/css.png';
import jquery from '../../images/jquery.png';
import angular from '../../images/angular.png';
import reactImg from '../../images/reactImg.png';
import php from '../../images/php.png';
import nodejs from '../../images/nodejs.png';
import cSharp from '../../images/cSharp.png';
import django from '../../images/django.png';
import laravel from '../../images/laravel.png';
import android from '../../images/android.png';
import ios from '../../images/ios.png';
import ionic from '../../images/ionic.png';
import borderTech from "../../images/borderTech.png";
import wordpress from '../../images/wordpress.png';
import drupal from '../../images/drupal.png';
import mysql from '../../images/mysql.png';
import mongodb from '../../images/mongodb.png';
import python from '../../images/python.png';
import borderTg from "../../images/borderTg.png";
import { useMediaQuery } from 'react-responsive';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const technologies = [
  {
    category: 'Frontend',
    techs: [
      { image: html, alt: 'HTML', text: 'HTML' },
      { image: css, alt: 'CSS3', text: 'CSS3' },
      { image: jquery, alt: 'jQuery', text: 'jQuery' },
      { image: angular, alt: 'AngularJS', text: 'AngularJS' },
      { image: reactImg, alt: 'ReactJS', text: 'ReactJS' }
    ]
  },
  {
    category: 'Server Side',
    techs: [
      { image: php, alt: 'PHP', text: 'PHP' },
      { image: nodejs, alt: 'NodeJS', text: 'NodeJS' },
      { image: cSharp, alt: 'C#', text: 'C#' },
      { image: django, alt: 'Django', text: 'Django' },
      { image: laravel, alt: 'Laravel', text: 'Laravel' }
    ]
  },
  {
    category: 'Mobile App',
    techs: [
      { image: android, alt: 'Android', text: 'Android' },
      { image: ios, alt: 'iOS', text: 'iOS' },
      { image: ionic, alt: 'Ionic', text: 'Ionic' },
      { image: reactImg, alt: 'React Native', text: 'React Native' }
    ]
  },
  {
    category: 'CMS',
    techs: [
      { image: wordpress, alt: 'Wordpress', text: 'Wordpress' },
      { image: drupal, alt: 'Drupal', text: 'Drupal' }
    ]
  },
  {
    category: 'Database',
    techs: [
      { image: mysql, alt: 'MySQL', text: 'MySQL' },
      { image: mongodb, alt: 'MongoDB', text: 'MongoDB' }
    ]
  },
  {
    category: 'Data Science',
    techs: [
      { image: python, alt: 'Python', text: 'Python' }
    ]
  }
];

const Technology = () => {
  const size = useWindowSize();
  const lgsize = useMediaQuery({ query: '(min-width: 1024px)' });

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev-arrow`}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next-arrow`}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <NextArrow />   
  };

  return (
    <div className={lgsize ? "techno-slide useFlexCenter" : "techno-slide"}>
      {size.width <= 768 ? (
        <Slider {...settings}>
          {technologies.map((techGroup, index) => (
            <div key={index} className="section p-2 overflow-hidden mobileWidth" >
              <h2 className="techStack-heading">{techGroup.category}</h2>
              <ul className="p-4 relative h-[270px]">  
                {techGroup.techs.map((tech, idx) => (
                  <li key={idx} className='language overflow-hidden'>
                    <img src={tech.image} alt={tech.alt} />
                    {tech.text}
                    <img className="border-tech z-40 justify-end right-[7rem]" src={["Drupal", "MongoDB", "Python"].includes(tech.text) ? borderTech : borderTg} alt="borderTech" style={{
                      height: tech.text === "HTML" || tech.text === "PHP" || tech.text === "Android" ? "150px" : "80px",
                      top: tech.text === "Drupal" || tech.text === "MongoDB" || tech.text === "Python" ? 50 : null,
                      display: tech.text === "Wordpress" || tech.text === "MySQL" ? "none" : ""
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="tech-stack">
          {technologies.map((techGroup, index) => (
            <div key={index} className="section p-2 overflow-hidden">
              <h2 className="techStack-heading">{techGroup.category}</h2>
              <ul className="p-4 relative h-[270px]">  
                {techGroup.techs.map((tech, idx) => (
                  <li key={idx} className='language overflow-hidden'>
                    <img src={tech.image} alt={tech.alt} />
                    {tech.text}
                    <img className="border-tech z-40 justify-end right-[7rem]" src={["Drupal", "MongoDB", "Python"].includes(tech.text) ? borderTech : borderTg} alt="borderTech" style={{
                      height: tech.text === "HTML" || tech.text === "PHP" || tech.text === "Android" ? "150px" : "80px",
                      top: tech.text === "Drupal" || tech.text === "MongoDB" || tech.text === "Python" ? 50 : null,
                      display: tech.text === "Wordpress" || tech.text === "MySQL" ? "none" : ""
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Technology;
