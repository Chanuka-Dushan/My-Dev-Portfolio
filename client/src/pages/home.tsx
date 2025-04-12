import { useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import EducationSection from "@/components/sections/education-section";
import GithubSection from "@/components/sections/github-section";
import Footer from "@/components/sections/footer";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = `${portfolioData.name} | Portfolio`;
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
        
        <AboutSection 
          description={portfolioData.about.description}
          skills={portfolioData.about.skills}
          interests={portfolioData.about.interests}
        />
        
        <ExperienceSection 
          experiences={portfolioData.experiences}
        />
        
        <EducationSection 
          educations={portfolioData.educations}
        />
        
        <GithubSection 
          username={portfolioData.githubUsername}
        />
      </main>
      
      <Footer 
        socialLinks={portfolioData.socialLinks}
      />
    </div>
  );
}
