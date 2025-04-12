import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Code, Users } from "lucide-react";
import { useGitHubStats } from "@/hooks/use-github-stats";

interface GithubSectionProps {
  username: string;
}

export default function GithubSection({ username }: GithubSectionProps) {
  const { 
    stats, 
    topRepos, 
    isLoading, 
    error 
  } = useGitHubStats(username);

  const statsItems = [
    { icon: <Code className="h-8 w-8 text-primary" />, label: "Repositories", value: stats?.publicRepos || 0 },
    { icon: <Star className="h-8 w-8 text-yellow-400" />, label: "Stars", value: stats?.totalStars || 0 },
    { icon: <GitFork className="h-8 w-8 text-green-400" />, label: "Contributions", value: stats?.totalContributions || 0 },
    { icon: <Users className="h-8 w-8 text-blue-400" />, label: "Followers", value: stats?.followers || 0 },
  ];

  if (error) {
    console.error("Error fetching GitHub stats:", error);
  }

  return (
    <section id="github" className="py-20 bg-[#1E1E1E] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-sans mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          GitHub <span className="text-primary">Statistics</span>
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          {/* GitHub Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statsItems.map((item, index) => (
              <motion.div 
                key={index}
                className="github-stat bg-[#2A2A2A] rounded-xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg mb-1">{item.label}</h3>
                {isLoading ? (
                  <div className="animate-pulse h-8 w-16 mx-auto bg-gray-700 rounded"></div>
                ) : (
                  <p className="text-3xl font-bold text-white">
                    {item.value.toLocaleString()}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Top Repositories */}
          <motion.h3 
            className="text-2xl font-bold font-sans mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Top <span className="text-primary">Repositories</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? (
              // Loading skeleton
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="h-5 w-40 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 w-64 bg-gray-700 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-4 w-8 bg-gray-700 rounded"></div>
                      <div className="h-4 w-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-6 w-16 bg-gray-700 rounded"></div>
                    <div className="h-6 w-16 bg-gray-700 rounded"></div>
                    <div className="h-6 w-16 bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-2 text-center py-10">
                <p className="text-gray-400">
                  Unable to load GitHub repositories. Please try again later.
                </p>
              </div>
            ) : (
              topRepos.map((repo, index) => (
                <motion.div 
                  key={repo.id}
                  className="bg-[#2A2A2A] rounded-xl p-6 shadow-lg hover:shadow-primary/10 transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-white text-lg">{repo.name}</h4>
                      <p className="text-gray-400 text-sm">{repo.description || "No description available"}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center text-blue-400">
                        <GitFork className="h-4 w-4 mr-1" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.languages.slice(0, 3).map((lang, langIndex) => (
                      <span 
                        key={langIndex} 
                        className={`bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <a 
                      href={repo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      View Repository <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
            >
              View All Repositories <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
