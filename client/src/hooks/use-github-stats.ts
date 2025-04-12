import { useState, useEffect } from "react";
import axios from "axios";

interface GitHubUser {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  languages_url: string;
}

export interface GitHubStats {
  username: string;
  name: string;
  avatarUrl: string;
  profileUrl: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalContributions: number;
}

export interface TopRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  languages: string[];
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [topRepos, setTopRepos] = useState<TopRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch user data
        const userResponse = await axios.get<GitHubUser>(
          `https://api.github.com/users/${username}`
        );
        
        // Fetch repositories
        const reposResponse = await axios.get<GitHubRepo[]>(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        
        // Calculate total stars
        const totalStars = reposResponse.data.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );
        
        // Sort repositories by stars and get top 4
        const sortedRepos = [...reposResponse.data].sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        
        const top4Repos = sortedRepos.slice(0, 4);
        
        // Fetch languages for each top repo
        const topReposWithLanguages = await Promise.all(
          top4Repos.map(async (repo) => {
            try {
              const languagesResponse = await axios.get(repo.languages_url);
              const languages = Object.keys(languagesResponse.data);
              
              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                languages: languages.length > 0 ? languages : [repo.language || "Unknown"],
              };
            } catch (error) {
              console.error(`Error fetching languages for ${repo.name}:`, error);
              return {
                id: repo.id,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                languages: [repo.language || "Unknown"],
              };
            }
          })
        );
        
        // We'll simulate contributions count since GitHub doesn't provide this via the API
        // In a real application, you might want to parse the contributions graph
        const simulatedContributions = reposResponse.data.length * 25 + totalStars * 3;
        
        setStats({
          username: userResponse.data.login,
          name: userResponse.data.name || userResponse.data.login,
          avatarUrl: userResponse.data.avatar_url,
          profileUrl: userResponse.data.html_url,
          publicRepos: userResponse.data.public_repos,
          followers: userResponse.data.followers,
          totalStars,
          totalContributions: simulatedContributions,
        });
        
        setTopRepos(topReposWithLanguages);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err instanceof Error ? err : new Error("An unknown error occurred"));
        
        // Set fallback data for development/preview
        setStats({
          username: username,
          name: username,
          avatarUrl: "",
          profileUrl: `https://github.com/${username}`,
          publicRepos: 0,
          followers: 0,
          totalStars: 0,
          totalContributions: 0,
        });
        
        setTopRepos([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (username) {
      fetchGitHubData();
    }
  }, [username]);
  
  return { stats, topRepos, isLoading, error };
}
