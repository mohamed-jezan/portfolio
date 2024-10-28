import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center font-poppins relative">
          <span className="relative inline-block">
            {title}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </span>
        </h2>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;