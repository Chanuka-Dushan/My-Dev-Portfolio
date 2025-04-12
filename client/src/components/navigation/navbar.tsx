import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const topOffset = 80; // account for the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    // Create an anchor element and set the properties
    const link = document.createElement('a');
    link.href = portfolioData.cvPath;
    link.download = 'developer_cv.pdf';
    // Append to the document and trigger click
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  const navbarClass = `fixed w-full z-50 backdrop-blur-sm py-4 transition-all duration-300 ${
    isScrolled ? "bg-[#121212]/90 shadow-md" : "bg-transparent"
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold font-sans text-white">
          <span className="text-primary">&lt;</span>Dev<span className="text-primary">/&gt;</span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-white hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <button
            onClick={handleDownloadCV}
            className="ml-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full 
                  flex items-center justify-center space-x-2 group transition-all duration-300
                  shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            <span>Download CV</span>
            <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden w-full bg-[#1E1E1E] border-b border-primary/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-primary transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full 
                      flex items-center justify-center space-x-2 group transition-all duration-300
                      shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                <span>Download CV</span>
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
