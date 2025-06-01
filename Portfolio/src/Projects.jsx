import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('all');
  
    const projectList = [
      {
        title: 'Simon Game',
        description: 'A classic Simon game built with HTML, CSS, and JavaScript. Test your memory and reflexes with this fun game!',
        tech: ['HTML', 'CSS','JavaScript'],
        image: 'Images/simongame.jpeg',
        github: 'https://github.com/Yuktamahajan1999/Simon-Game',
        live: 'https://yuktamahajan1999.github.io/Simon-Game/',
        category: 'frontend',
      },
      {
        title: 'Todo List',
        description: 'A simple and elegant todo list app to manage your tasks efficiently. Built with React and styled-components for a modern look.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        image: 'Images/Todolist.jpeg',
        github: 'https://github.com/Yuktamahajan1999/Todolist',
        live: 'https://todolist-lriy.vercel.app/',
        category: 'fullstack',
      },
      {
        title: 'Quiz App',
        description: 'A fun and interactive quiz app with multiple categories and difficulty levels. Built with React and Tailwind CSS for a modern look.',
        tech: ['React', 'Inline CSS'],
        image: 'Images/quiz-app.jpeg',
        github: 'https://github.com/Yuktamahajan1999/Quiz-App',
        live: 'https://yuktamahajan1999.github.io/Quiz-App',
        category: 'frontend',
      }
    ];
  
    const filteredProjects = filter === 'all' 
      ? projectList 
      : projectList.filter((p) => p.category === filter);
  
    return (
      <section className="projects" id="projects">
        <div className="projects__container">
          <header className="projects__header">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__divider"></div>
            <p className="projects__subtitle">Here are some of my recent work</p>
          </header>
  
          <div className="projects__filter">
            {['all', 'frontend', 'fullstack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`projects__filter-btn ${
                  filter === cat ? 'projects__filter-btn--active' : ''
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
  
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
