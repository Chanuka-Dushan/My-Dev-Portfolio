// Portfolio Data
export const portfolioData = {
  // Personal Info
  name: "John Doe",
  title: "Mobile & Fullstack Developer",
  shortBio: "Passionate about creating beautiful, functional, and user-friendly applications using cutting-edge technologies.",
  cvPath: "/cv.pdf", // Path to CV file
  
  // GitHub username for stats
  githubUsername: "johndoe",
  
  // Social links
  socialLinks: [
    { platform: "github" as const, url: "https://github.com/johndoe" },
    { platform: "linkedin" as const, url: "https://linkedin.com/in/johndoe" },
    { platform: "twitter" as const, url: "https://twitter.com/johndoe" },
    { platform: "email" as const, url: "mailto:john.doe@example.com" }
  ],
  
  // About section
  about: {
    description: "I am a seasoned Full Stack and Mobile Developer with over 5 years of experience crafting robust and scalable applications. My expertise spans across frontend and backend technologies, with a particular focus on mobile development using Flutter and native frameworks. I am passionate about clean code, user-centric design, and staying at the forefront of technology trends.",
    skills: [
      { name: "Flutter & Dart" },
      { name: "JavaScript/TypeScript" },
      { name: "React & React Native" },
      { name: "Node.js & Express" },
      { name: "Firebase & MongoDB" }
    ],
    interests: [
      { name: "Mobile App Development" },
      { name: "UI/UX Design" },
      { name: "Cloud Computing" },
      { name: "Open Source Contribution" },
      { name: "Tech Blogging" }
    ]
  },
  
  // Experience section
  experiences: [
    {
      role: "Senior Mobile Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2021 - Present",
      description: "Led the development of multiple enterprise-grade Flutter applications, managing a team of 5 developers. Implemented CI/CD pipelines and reduced app load time by 40% through code optimization.",
      technologies: [
        { name: "Flutter" },
        { name: "Firebase" },
        { name: "GraphQL" }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "WebSolution Co.",
      period: "Aug 2018 - Dec 2020",
      description: "Developed and maintained multiple web applications using MERN stack. Integrated payment gateways and third-party APIs. Optimized database queries resulting in 60% faster load times.",
      technologies: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" }
      ]
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "May 2017 - Jul 2018",
      description: "Assisted in developing frontend components using React and implemented RESTful APIs. Collaborated with UX designers to create responsive and accessible web interfaces.",
      technologies: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "Express" }
      ]
    }
  ],
  
  // Education section
  educations: [
    {
      degree: "MSc Computer Science",
      institution: "Stanford University",
      period: "2015 - 2017",
      description: "Specialized in Mobile Computing and Distributed Systems. Thesis on \"Optimizing Flutter Performance for Low-Powered Devices\"",
      type: "education" as const
    },
    {
      degree: "BSc Computer Engineering",
      institution: "MIT",
      period: "2011 - 2015",
      description: "Graduated with honors. Active member of the Mobile App Development Club. Completed several internships with tech companies.",
      type: "education" as const
    },
    {
      degree: "Google Flutter Certification",
      institution: "Google",
      period: "2020",
      description: "Advanced mobile development certification focusing on Flutter framework, state management, and performance optimization.",
      type: "certification" as const
    }
  ]
};
