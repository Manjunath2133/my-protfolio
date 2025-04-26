import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my work and skills.',
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'Built with React and OpenWeatherMap API to display real-time weather.',
      link: '#',
    },
    {
      title: 'Task Manager',
      description: 'A full-stack MERN app to manage daily tasks and priorities.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
