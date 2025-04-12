import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
}

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const getSocialIcon = (platform: string) => {
    switch(platform) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'email':
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#121212] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-bold font-sans text-white mb-2">
              <span className="text-primary">&lt;</span>Dev<span className="text-primary">/&gt;</span>
            </div>
            <p className="text-gray-400">© {currentYear} All Rights Reserved</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-white hover:bg-primary transition-colors"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {getSocialIcon(link.platform)}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
