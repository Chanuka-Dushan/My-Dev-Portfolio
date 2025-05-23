import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface HeroSectionProps {
  name?: string;
  title?: string;
  shortBio?: string;
  cvPath?: string;
}

export default function HeroSection({ name = "Dushan Chanuka", title = "Software & Mobile Developer", shortBio, cvPath }: HeroSectionProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownloadCV = () => {
    // Create an anchor element and set the properties
    const link = document.createElement('a');
    link.href = cvPath || "#";
    link.download = 'developer_cv.pdf';
    // Append to the document and trigger click
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-28 md:pt-24 overflow-hidden">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col items-center">
        {/* Mobile profile image - shows at top on mobile, hidden on md screens and up */}
        <motion.div 
          className="block md:hidden w-full max-w-[200px] mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative mx-auto"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut" 
            }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-md opacity-50"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="relative rounded-full overflow-hidden border-4 border-dark-lighter h-40 w-40">
              <img 
                src="https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Main content row */}
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <motion.p 
              className="text-blue-400 mb-3 text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            
            {/* Animated name as a single unit to prevent wrapping */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Dushan</span>
              <span className="mx-2"></span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Chanuka</span>
            </motion.h1>
            
            {/* Animated title as a single unit to prevent wrapping */}
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Software&nbsp;&nbsp;&amp;&nbsp;&nbsp;Mobile&nbsp;&nbsp;Developer
            </motion.div>
            
            <motion.p 
              className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring",
                stiffness: 100 
              }}
            >
              Building innovative mobile and web applications with a passion for creating engaging user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8,
                type: "spring"
              }}
            >
              <motion.a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"  
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-eye mr-2"></i>
                View My Work
              </motion.a>
              <motion.button
                onClick={handleDownloadCV}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"  
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </motion.button>
              <motion.a 
                href="#contact" 
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-8 md:mt-10 flex gap-4 md:gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a 
                href="https://github.com" 
                className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl bg-[#121212] p-2 rounded-full hover:bg-gray-800"
                whileHover={{ 
                  scale: 1.2,
                  color: "#ffffff",
                  rotate: 5,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl bg-[#121212] p-2 rounded-full hover:bg-gray-800"
                whileHover={{ 
                  scale: 1.2,
                  color: "#0077b5",
                  rotate: -5,
                  boxShadow: "0 0 15px rgba(0, 119, 181, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl bg-[#121212] p-2 rounded-full hover:bg-gray-800"
                whileHover={{ 
                  scale: 1.2,
                  color: "#1DA1F2",
                  rotate: 5,
                  boxShadow: "0 0 15px rgba(29, 161, 242, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-xl sm:text-2xl bg-[#121212] p-2 rounded-full hover:bg-gray-800"
                whileHover={{ 
                  scale: 1.2,
                  color: "#00ab6c",
                  rotate: -5,
                  boxShadow: "0 0 15px rgba(0, 171, 108, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-medium"></i>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Desktop profile image - hidden on mobile, visible on md screens and up */}
          <motion.div 
            className="hidden md:flex md:w-1/2 justify-center md:justify-end pr-6 lg:pr-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-md opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative rounded-full overflow-hidden border-4 border-gray-800 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80">
                {/* Profile image */}
                <img 
                  src="https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 text-blue-500 text-2xl opacity-30"
                animate={{ 
                  rotate: [0, 360],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "linear" 
                }}
              >
                <i className="fas fa-code"></i>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 -left-4 text-cyan-500 text-2xl opacity-30"
                animate={{ 
                  rotate: [0, -360],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 12,
                  ease: "linear" 
                }}
              >
                <i className="fas fa-mobile-alt"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut" 
        }}
      >
        <a href="#about" className="text-blue-400 hover:text-blue-300 transition-colors bg-[#121212]/50 rounded-full p-2 flex items-center justify-center">
          <i className="fas fa-chevron-down text-lg sm:text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}
