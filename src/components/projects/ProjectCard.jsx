import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, image, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-card__image" />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card__tech">{tech}</span>
          ))}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card__github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;