import React from 'react';
import ProjectCard from './ProjectCard';
import ourwork2 from "../../images/ourwork2.png"
import ourwork3 from "../../images/ourwork3.png"
import ourwork4 from "../../images/ourwork4.png"
import ourwork5 from "../../images/ourwork5.png"

const projects = [
  {
    title: "Project Rangamaati - Grassroot Initiative",
    category: "CONSULTING",
    image: ourwork2,
    link: "/cases/rangamaati",
    desc:"Project rangamaati works as a catalyst for impacting producer livelihoods at scale through a commitment to responsible"
  },
  {
    title: "BetterBuild - Future Of The Industry",
    category: "BUSINESS • CONSULTING",
    image: ourwork3,
    link: "/cases/betterbuild",
     desc:"Frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking."
  },
  {
    title: "GroCair - The Grocery App",
    category: "BUSINESS • CONSULTING",
    image: ourwork4,
    link: "/cases/grocair",
     desc:"Grocair was just an idea. Materialize the ideas and club it to create a successful customer driven application. "
  },
  {
    title: "Eiffel Industries - A Beautiful Website Creation",
    category: "CONSULTING",
    image: ourwork5,
    link: "/cases/effel",
     desc:"The requirement was well understood and created the website in a perfect manner."
  },
];

const ProjectList = () => {
  return (
    <div className="container mx-auto overflow-hidden px-4 py-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          image={project.image} 
          title={project.title} 
          desc={project.desc}
          category={project.category} 
          link={project.link} 
        />
      ))}
    </div>
  );
}

export default ProjectList;
