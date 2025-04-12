import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: "fas fa-layer-group",
      color: "text-primary",
      gradient: "from-primary to-secondary",
      description: "Building complete web applications from front-end interfaces to back-end systems and databases.",
      skills: [
        "Creating responsive and intuitive user interfaces with modern frameworks",
        "Developing secure and efficient APIs and server-side applications",
        "Implementing database designs and optimizing data operations"
      ]
    },
    {
      title: "Mobile App Development",
      icon: "fas fa-mobile-alt",
      color: "text-secondary",
      gradient: "from-secondary to-accent",
      description: "Developing cross-platform and native mobile applications for iOS and Android platforms.",
      skills: [
        "Building cross-platform applications with React Native and Flutter",
        "Creating native Android applications with Kotlin and Java",
        "Implementing responsive designs and state management solutions"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "fas fa-cloud",
      color: "text-accent",
      gradient: "from-accent to-primary",
      description: "Currently exploring and learning DevOps practices including CI/CD and cloud-based infrastructure.",
      skills: [
        "Setting up CI/CD pipelines for automated testing and deployment",
        "Managing cloud infrastructure and containerized applications",
        "Optimizing application performance and scalability"
      ]
    }
  ];

  // Categorized technologies
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "fab fa-react text-blue-500" },
        { name: "JavaScript", icon: "fab fa-js text-yellow-500" },
        { name: "TypeScript", icon: "fas fa-code text-blue-400" },
        { name: "HTML5", icon: "fab fa-html5 text-orange-600" },
        { name: "CSS3", icon: "fab fa-css3-alt text-blue-600" },
        { name: "Tailwind CSS", icon: "fab fa-css3 text-cyan-500" },
        { name: "Redux", icon: "fas fa-archive text-purple-500" },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "fab fa-node-js text-green-600" },
        { name: "Express", icon: "fas fa-server text-gray-400" },
        { name: "Spring Boot", icon: "fas fa-leaf text-green-500" },
        { name: "Java", icon: "fab fa-java text-red-600" },
        { name: "PHP", icon: "fab fa-php text-indigo-600" },
        { name: "C", icon: "fas fa-code text-blue-700" },
        { name: "C++", icon: "fas fa-file-code text-blue-800" },
      ]
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", icon: "fas fa-mobile-alt text-purple-600" },
        { name: "Flutter", icon: "fas fa-feather-alt text-cyan-500" },
        { name: "Kotlin", icon: "fas fa-k text-orange-500" },
        { name: "Dart", icon: "fas fa-bullseye text-blue-400" },
        { name: "Android", icon: "fab fa-android text-green-600" },
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: "fas fa-database text-green-500" },
        { name: "MySQL", icon: "fas fa-database text-blue-700" },
        { name: "Oracle", icon: "fas fa-database text-red-600" },
        { name: "Prisma", icon: "fas fa-table text-cyan-500" },
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Git", icon: "fab fa-git-alt text-orange-600" },
        { name: "Bitbucket", icon: "fab fa-bitbucket text-blue-500" },
        { name: "Apache", icon: "fas fa-server text-red-500" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-[#121212] section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            I specialize in full-stack and mobile development with expertise in a wide range of technologies.
          </p>
        </motion.div>
        
        {/* Skills Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-lg border border-gray-800 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`${category.color} text-4xl mb-4`}>
                <i className={category.icon}></i>
              </div>
              <h3 className="text-xl font-sans font-bold mb-3">{category.title}</h3>
              <p className="text-gray-400 mb-5">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-start space-x-2">
                    <div className="text-primary mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technologies by Category */}
        {techCategories.map((techCategory, categoryIdx) => (
          <div key={categoryIdx} className="mb-12">
            <motion.h3 
              className="text-xl font-sans font-bold text-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {techCategory.category}
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techCategory.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="px-4 py-2 bg-[#1a1a1a] rounded-full shadow-md flex items-center space-x-2 border border-gray-800"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                >
                  <i className={tech.icon}></i>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}