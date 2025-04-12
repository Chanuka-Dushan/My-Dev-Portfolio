import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/ProjectData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Define categories correctly
  const categories = ['all', 'Web', 'Mobile'];

  // Update filtered projects whenever category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  // Handle category change safely
  const handleCategoryChange = (category: string) => {
    // If clicking the same category again, go back to 'all'
    if (category === activeCategory && category !== 'all') {
      setActiveCategory('all');
    } else {
      setActiveCategory(category);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  // Function to format category display name with proper spacing
  const formatCategoryName = (category: string) => {
    return category === 'all' 
      ? 'All Projects' 
      : `${category} Projects`;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#1E1E1E] section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A collection of my recent work showcasing my skills and experience.
          </motion.p>
        </div>
        
        {/* Filter buttons */}
        <div className="mb-8 flex justify-center flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button 
              key={index}
              className={`px-4 py-2 rounded-full bg-[#121212] border text-sm sm:text-base sm:px-5 ${
                activeCategory === category 
                  ? 'border-primary bg-primary/20 text-primary' 
                  : 'border-gray-700 hover:border-primary text-gray-300'
              } transition-colors`}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {formatCategoryName(category)}
            </motion.button>
          ))}
        </div>
        
        {/* Current category indicator */}
        <div className="text-center mb-6 text-sm text-gray-400">
          <span>Currently viewing: </span>
          <span className="text-primary font-medium">{formatCategoryName(activeCategory)}</span>
          {activeCategory !== 'all' && (
            <button 
              onClick={() => setActiveCategory('all')}
              className="ml-2 text-gray-500 hover:text-gray-300 underline text-xs"
            >
              (show all)
            </button>
          )}
        </div>
        
        {/* Projects grid */}
        <motion.div 
          id="projects-grid" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-12 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-search text-5xl mb-4 text-primary"></i>
              <p className="text-xl">No projects found in this category.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="mt-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md"
              >
                Show All Projects
              </button>
            </motion.div>
          ) : (
            // Removed AnimatePresence to fix the warning
            <>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="project-card bg-[#121212] rounded-lg overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-40 sm:h-48 overflow-hidden bg-gray-800 relative">
                    {/* Project icon/image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#171717]">
                      <div className={`text-4xl sm:text-5xl ${project.category === 'Web' ? 'text-primary/40' : 'text-blue-500/40'}`}>
                        {project.category === 'Web' ? (
                          project.title.includes('Hotel') ? (
                            <i className="fas fa-hotel"></i>
                          ) : project.title.includes('Ecommex') ? (
                            <i className="fas fa-shopping-cart"></i>
                          ) : project.title.includes('Easy Rent') ? (
                            <i className="fas fa-home"></i>
                          ) : (
                            <i className="fas fa-laptop-code"></i>
                          )
                        ) : project.title.includes('WhatsApp') ? (
                          <i className="fab fa-whatsapp"></i>
                        ) : (
                          <i className="fas fa-mobile-alt"></i>
                        )}
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.category === 'Web' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 flex-grow flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-xs sm:text-sm flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.category === 'Web' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-blue-500/10 text-blue-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                      {project.links.map((link, index) => (
                        <motion.a 
                          key={index}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center justify-center text-xs sm:text-sm ${
                            link.icon.includes('github') 
                              ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600' 
                              : 'bg-primary hover:bg-primary/90 text-white'
                          } transition-colors flex-1`}
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: link.icon.includes('github') 
                              ? "0 5px 15px rgba(0, 0, 0, 0.2)" 
                              : "0 5px 15px rgba(59, 130, 246, 0.3)" 
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className={`${link.icon} mr-1.5 sm:mr-2`}></i> 
                          {link.icon.includes('github') ? 'View Code' : 'Live Demo'}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}