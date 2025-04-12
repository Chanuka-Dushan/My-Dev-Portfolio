import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface TechTag {
  name: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: TechTag[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-[#1E1E1E] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-sans mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-container pl-10 md:pl-0">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className="timeline-item mb-12 md:grid md:grid-cols-5 gap-4 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Marker for Mobile */}
                <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center md:hidden z-10">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                
                {/* Company and Time */}
                <div className="md:col-span-2 md:text-right mb-4 md:mb-0 md:pr-6 relative">
                  {/* Timeline Marker for Desktop */}
                  <div className="hidden md:block absolute right-0 w-4 h-4 bg-primary rounded-full transform translate-x-2"></div>
                  
                  <h3 className="font-bold text-xl text-white">{experience.role}</h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                  <p className="text-gray-400">{experience.period}</p>
                </div>
                
                {/* Description */}
                <div className="md:col-span-3 md:border-l-2 border-primary/30 md:pl-6">
                  <p className="text-gray-300">
                    {experience.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
