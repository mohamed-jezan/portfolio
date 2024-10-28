import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
      <SocialLink href="https://github.com/mohamed-jezan" icon={<Github />} label="GitHub" />
      <SocialLink href="https://linkedin.com/in/mohamed-jezan" icon={<Linkedin />} label="LinkedIn" />
      <SocialLink href="mailto:jezanarm@gmail.com" icon={<Mail />} label="Email" />
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="p-3 rounded-full bg-white/90 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
      {icon}
    </span>
    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </a>
);

export default SocialLinks;