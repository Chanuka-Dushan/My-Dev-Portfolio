import { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import GithubSection from "@/components/sections/github-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = `${portfolioData.name || "Dushan Chanuka"} | Portfolio`;
  }, []);

  return (
    <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          name={portfolioData.name} 
          title={portfolioData.title} 
          shortBio={portfolioData.shortBio} 
          cvPath={portfolioData.cvPath}
        />
        
        <AboutSection />
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <GithubSection 
          username={portfolioData.githubUsername || "johndoe"}
        />

        <ContactSection />
      </main>
      
      <Footer 
        socialLinks={portfolioData.socialLinks || [
          { platform: 'github', url: 'https://github.com/johndoe' },
          { platform: 'linkedin', url: 'https://linkedin.com/in/johndoe' },
          { platform: 'twitter', url: 'https://twitter.com/johndoe' },
          { platform: 'email', url: 'mailto:john@example.com' }
        ]}
      />
    </div>
  );
}
