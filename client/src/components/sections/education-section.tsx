import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: "education" | "certification";
}

interface EducationSectionProps {
  educations: Education[];
}

export default function EducationSection({ educations }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 bg-[#121212] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-sans mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Education</span> & Qualifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educations.map((education, index) => (
            <motion.div 
              key={index}
              className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {education.type === "education" ? (
                  <GraduationCap className="h-8 w-8 text-primary" />
                ) : (
                  <Award className="h-8 w-8 text-primary" />
                )}
              </div>
              
              <h3 className="font-bold text-xl text-white mb-2">{education.degree}</h3>
              <p className="text-primary font-medium mb-2">{education.institution}</p>
              <p className="text-gray-400 mb-4">{education.period}</p>
              <p className="text-gray-300 text-sm">
                {education.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
