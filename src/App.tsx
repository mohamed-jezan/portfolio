import React from 'react';
import { Github, Linkedin, Mail, Terminal, Code, Database, Layout, Briefcase, GraduationCap, MapPin, Phone } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import SocialLinks from './components/SocialLinks';
import photo from './images/photo.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <NavBar />
      <SocialLinks />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-blue-900/95"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8 text-white">
            <div className="flex items-center gap-3 animate-fade-in">
              <Terminal className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-medium text-blue-400">Software Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Mohamed Jezan
            </h1>
            <p className="text-xl leading-relaxed animate-fade-in opacity-90">
              Crafting digital experiences through elegant code and innovative solutions
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              <a 
                href="https://github.com/mohamed-jezan" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="font-medium group-hover:underline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/mohamed-jezan" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium group-hover:underline">LinkedIn</span>
              </a>
              <a 
                href="mailto:jezanarm@gmail.com"
                className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="font-medium group-hover:underline">Email</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur-3xl opacity-20"></div>
              <img 
                src={photo} 
                alt="Mohamed Jezan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-white/5 text-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-medium">Institute of Technology, University of Moratuwa</h4>
                <p className="text-gray-300">Undergraduate (2022-2024)</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-medium">Kattankudy Central College</h4>
                <p className="text-gray-300">G.C.E A/L (2017-2019)</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-medium">Al-Hira Maha Vidyalaya</h4>
                <p className="text-gray-300">G.C.E O/L (2016)</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Contact Information</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+94768687906</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>jezanarm@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>No.68, APH Lane, Kattankudy 05, Batticaloa, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-4">
              <SkillBar name="Java" level={85} />
              <SkillBar name="JavaScript" level={85} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>
            <div className="space-y-4">
              <SkillBar name="MySQL" level={85} />
              <SkillBar name="Firebase" level={80} />
              <SkillBar name="MongoDB" level={80} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>
            <div className="space-y-4">
              <SkillBar name="React" level={85} />
              <SkillBar name="Flutter" level={90} />
              <SkillBar name="Node.js" level={80} />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Cassava Healthy Finder"
            description="Cassava Healthy Finder is a Flutter-based app powered by machine learning that helps farmers quickly detect cassava diseases like Cassava Mosaic Disease (CMD) and Cassava Green Mite (CGM), enabling timely action and better crop yields."
            tech={['Flutter', 'Firebase', 'Firestore', 'Dart', 'TensorFlow']}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
            link="https://github.com/mohamed-jezan/Final-Group-Project"
          />
          <ProjectCard
            title="MRTK FOOD & DRINK - Trendy Restaurant E-Commerce Platform"
            description="MRTK delivers restaurant-quality meals through a seamless online platform. Explore a rich menu, order easily, and enjoy exceptional taste and service from the comfort of your home."
            tech={['HTML', 'CSS', 'JavaScript', 'PHP','MySQL']}
            image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800"
            link="https://github.com/mohamed-jezan/MRTK-Restaurant"
          />
          <ProjectCard
            title="MERN Stack Full-Stack Web Application"
            description="A full-stack web application I built using the MERN stack to deliver a responsive, dynamic, and modern user experience from scratch."
            tech={['React', 'MongoDB', 'Express.js', 'Node.js', 'JavaScript']}
            image="https://github.com/mohamed-jezan/MRTKProductStore"
          />
        </div>
      </Section>
    </div>
  );
}

export default App;