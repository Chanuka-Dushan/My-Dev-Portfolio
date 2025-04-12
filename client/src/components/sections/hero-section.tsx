import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { TypewriterText, FadeInText } from "@/components/ui/animated-text";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCode, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiTailwindcss } from "react-icons/si";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  name: string;
  title: string;
  shortBio: string;
  cvPath: string;
}

export default function HeroSection({ name, title, shortBio, cvPath }: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

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
    { icon: <SiFlutter className="text-blue-400 text-2xl" />, name: "Flutter" },
    { icon: <FaJs className="text-yellow-400 text-2xl" />, name: "JavaScript" },
    { icon: <FaNodeJs className="text-green-500 text-2xl" />, name: "Node.js" },
    { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-teal-400 text-2xl" />, name: "Tailwind" },
    { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML5" },
    { icon: <FaCode className="text-purple-400 text-2xl" />, name: "Code" },
    { icon: <FaDatabase className="text-red-400 text-2xl" />, name: "Database" },
  ];

  // Calculate the optimized layout
  const mobileLayout = isMobile || window.innerWidth < 768;
  
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 lg:pt-0 flex items-center justify-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className={`flex flex-col items-center justify-center ${mobileLayout ? 'flex-col-reverse' : 'flex-col'}`}>
          {/* Order changes based on mobile/desktop */}
          <div className={`text-center ${mobileLayout ? 'mt-8' : 'mb-8'}`}>
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
          </div>
          
          {/* Profile Image with integrated eclipses and floating icons */}
          <div className={`relative mb-10 ${mobileLayout ? 'mt-3' : 'mt-6'}`}>
            <motion.div
              className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-1 z-10 shadow-xl shadow-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Eclipses around the profile image - better aligned */}
              <div className="absolute w-full h-full rounded-full -z-10 top-0 left-0">
                <motion.div
                  className="absolute w-[110%] h-[110%] rounded-full border-2 border-dashed border-primary/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-[125%] h-[125%] rounded-full border-2 border-dashed border-accent/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-[140%] h-[140%] rounded-full border-2 border-dashed border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                />
              </div>
              
              {/* The profile image */}
              <img 
                src="https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Developer Profile" 
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Floating technology icons around the profile - better positioned */}
              {isClient && (
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    {techIcons.map((tech, index) => {
                      // Calculate position based on screen size for better responsiveness
                      const angle = (index / techIcons.length) * Math.PI * 2;
                      // Adjust radius based on container size for proper scaling
                      const radius = mobileLayout ? 120 : 150; 
                      const x = radius * Math.cos(angle);
                      const y = radius * Math.sin(angle);
                      
                      return (
                        <motion.div
                          key={index}
                          className="absolute top-1/2 left-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1a1a] shadow-lg flex items-center justify-center border border-primary/20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                          }}
                          transition={{ 
                            delay: index * 0.15,
                            duration: 0.5,
                          }}
                          style={{
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                          }}
                        >
                          {tech.icon}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Short bio */}
          <FadeInText delay={0.6} className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-400">
              {shortBio}
            </p>
          </FadeInText>
          
          {/* Download CV Button */}
          <FadeInText delay={0.8} className="flex justify-center">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full 
                    flex items-center justify-center space-x-2 group transition-all duration-300
                    shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <span>Download CV</span>
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </FadeInText>
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
