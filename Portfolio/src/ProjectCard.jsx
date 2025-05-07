import React,{useState} from 'react';
import { FiGithub, FiExternalLink ,FiInfo} from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div 
        className={`project-card ${isFlipped ? 'project-card--flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="project-card__inner">
          {/* Front Side */}
          <div className="project-card__front">
            <div className="project-card__image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-card__image"
                loading="lazy"
              />
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <div className="project-card__tech-badges">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span key={i} className="project-card__tech-badge">{tech}</span>
              ))}
              {project.tech.length > 3 && (
                <span className="project-card__tech-badge project-card__tech-badge--more">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
            <div className="project-card__hint">
              <FiInfo className="project-card__hint-icon" />
              Click for details
            </div>
          </div>
          
          {/* Back Side */}
          <div className="project-card__back">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tech-stack">
              <h4 className="project-card__tech-stack-title">Tech Stack</h4>
              <div className="project-card__tech-items">
                {project.tech.map((tech, i) => (
                  <span key={i} className="project-card__tech-item">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-card__links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card__link project-card__link--github"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub /> View Code
              </a>
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--live"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;