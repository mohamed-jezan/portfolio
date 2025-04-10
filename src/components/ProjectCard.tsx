import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string; // ✅ added link to the props interface
}

const ProjectCard = ({ title, description, tech, image, link }: ProjectCardProps) => {
  return (
    <div className="hover-card rounded-xl overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 font-poppins">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-sm text-blue-600 font-semibold hover:underline"
          >
            🔗 View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
