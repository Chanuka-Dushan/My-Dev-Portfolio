import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TypewriterText, FadeInText } from "@/components/ui/animated-text";
import { EclipseSet } from "@/components/ui/eclipse-animation";
import { FloatingIcon, FloatingIconsContainer } from "@/components/ui/floating-icon";
import { FaReact, FaNodeJs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiFlutter, SiTailwindcss } from "react-icons/si";

interface HeroSectionProps {
  name: string;
  title: string;
  shortBio: string;
  cvPath: string;
}

export default function HeroSection({ name, title, shortBio, cvPath }: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownloadCV = () => {
    // Create an anchor element and set the properties
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'developer_cv.pdf';
    // Append to the document and trigger click
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  const techIcons = [
    { icon: <SiFlutter className="text-blue-400 text-2xl" /> },
    { icon: <FaJs className="text-yellow-400 text-2xl" /> },
    { icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { icon: <FaReact className="text-blue-400 text-2xl" /> },
    { icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
    { icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  ];

  return (
    <section id="home" className="min-h-screen pt-24 lg:pt-0 flex items-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <FadeInText delay={0.2}>
              <h3 className="text-xl md:text-2xl text-primary mb-2 font-mono">Hello, I'm</h3>
            </FadeInText>
            
            {isClient && (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-4">
                  <TypewriterText text={name} />
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium font-sans mb-8">
                  <TypewriterText text={title} delay={2} />
                </h2>
              </>
            )}
            
            <FadeInText delay={0.6}>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                {shortBio}
              </p>
            </FadeInText>
            
            <FadeInText delay={0.8}>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full 
                      flex items-center justify-center w-fit space-x-2 group transition-all duration-300
                      shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                <span>Download CV</span>
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </FadeInText>
          </div>
          
          {/* Right Content - Profile Image with Eclipse */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <EclipseSet>
                <img 
                  src="https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover"
                />
              </EclipseSet>
              
              {isClient && (
                <FloatingIconsContainer>
                  {techIcons.map((tech, index) => (
                    <FloatingIcon 
                      key={index}
                      icon={tech.icon}
                      index={index}
                      totalIcons={techIcons.length}
                    />
                  ))}
                </FloatingIconsContainer>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => {
            const aboutSection = document.querySelector("#about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
