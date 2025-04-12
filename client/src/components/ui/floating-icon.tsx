import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingIconProps {
  icon: ReactNode;
  index: number;
  totalIcons: number;
}

export function FloatingIcon({ icon, index, totalIcons }: FloatingIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const radius = 140; // Distance from the center

  // Calculate the position based on index
  const calculatePosition = () => {
    const angle = (index / totalIcons) * Math.PI * 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  // Custom animation variants
  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
      },
    },
  };

  // Calculate the orbit position
  const orbitAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 25 + index * 2, // Slightly different speeds for each icon
      ease: "linear",
      repeat: Infinity,
    },
  };

  // Self-rotation animation for the icon itself
  const selfRotationVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const { x, y } = calculatePosition();

  return (
    <motion.div
      ref={iconRef}
      className="absolute"
      style={{ width: 0, height: 0 }}
      initial="initial"
      animate="animate"
      variants={iconVariants}
      custom={index}
    >
      <motion.div 
        className="w-12 h-12 rounded-full bg-dark-500 shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 border border-primary/20"
        animate={{ x, y }}
        style={{ x, y }}
        variants={selfRotationVariants}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

interface FloatingIconsContainerProps {
  children: ReactNode;
}

export function FloatingIconsContainer({ children }: FloatingIconsContainerProps) {
  return (
    <motion.div 
      className="absolute w-full h-full"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}
