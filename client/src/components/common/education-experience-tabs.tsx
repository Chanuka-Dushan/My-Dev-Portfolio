import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export default function EducationExperienceTabs() {
  const [activeTab, setActiveTab] = useState("experience");

  // Education data
  const education = [
    {
      degree: "MSc Computer Science",
      institution: "Stanford University",
      period: "2015 - 2017",
      description: "Specialized in Mobile Computing and Distributed Systems",
    },
    {
      degree: "BSc Computer Engineering",
      institution: "MIT",
      period: "2011 - 2015",
      description: "Graduated with honors. Active member of the Mobile App Development Club",
    },
  ];

  // Experience data
  const experiences = [
    {
      role: "Senior Mobile Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description: "Led the development of multiple enterprise-grade Flutter applications",
    },
    {
      role: "Full Stack Developer",
      company: "WebSolution Co.",
      period: "Aug 2018 - Dec 2020",
      description: "Developed and maintained multiple web applications using MERN stack",
    },
  ];

  return (
    <div className="bg-dark-bg p-4 rounded-xl shadow-lg border border-gray-800">
      {/* Tabs */}
      <div className="flex border-b border-gray-800 mb-4">
        <button
          className={`px-4 py-2 font-medium flex items-center transition-colors ${
            activeTab === "experience"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <Briefcase className="h-4 w-4 mr-2" />
          Experience
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center transition-colors ${
            activeTab === "education"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <GraduationCap className="h-4 w-4 mr-2" />
          Education
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {activeTab === "experience" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            key="experience"
            className="space-y-4"
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-500/30 pl-4 py-1"
              >
                <h4 className="text-white font-medium">{exp.role}</h4>
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <span className="text-blue-500">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-sm text-gray-300">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            key="education"
            className="space-y-4"
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-500/30 pl-4 py-1"
              >
                <h4 className="text-white font-medium">{edu.degree}</h4>
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <span className="text-blue-500">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-sm text-gray-300">{edu.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}