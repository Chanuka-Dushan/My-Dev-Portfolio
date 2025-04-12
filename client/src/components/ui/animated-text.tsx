import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const defaultClass = "typing border-r-2 border-white";
  const combinedClass = `${defaultClass} ${className}`;
  
  const textVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        className={combinedClass}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 h-full w-[2px] bg-white"
        variants={cursorVariants}
        animate="blinking"
      />
    </div>
  );
}

interface FadeInTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInText({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = ""
}: FadeInTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
