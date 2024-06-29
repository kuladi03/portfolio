import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import EduDrop from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/Edudrop.png"
import Aria from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/Aria.png"
import Map from "D:/Projects/Aditya_PortFolio/aditya_portfolio/src/assets/Map.png"

const projects = [
  {
    title: 'EduDrop',
    description: 'A system for analyzing student dropout rates using machine learning.',
    technologies: ['Machine Learning', 'Data Visualization', 'React.js', 'MySQL', 'Educational Technology'],
    image: EduDrop,
    githubLink: 'https://github.com/kuladi03/EduDrop-Student-DropOut-Analysis',
  },
  {
    title: 'Aria - Virtual Assistant',
    description: 'A Python-based virtual assistant with voice recognition capabilities.',
    technologies: ['Python Programming', 'Machine Learning', 'Text-to-Speech', 'Virtual Assistant', 'Natural Language Processing'],
    image: Aria,
    githubLink: 'https://github.com/kuladi03/Aria-Virtual-Assistant',
  },
  {
    title: 'Brain Tumor Detection',
    description: 'A machine learning project to detect brain tumors from MRI scans.',
    technologies: ['Python','CSV data', 'Machine learning', 'Diagnostic accuracy', 'Treatment planning'],
    image: Map,
    githubLink: 'https://github.com/kuladi03/Mapping-Brain-Tumor-Progression',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects" id='projects'>
      <h2 className="projects__title">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
